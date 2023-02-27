import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Header from "./compontents/Header";
import Footer from "./compontents/Footer";

import { db } from './firebase-config';
import {collection, getDocs} from "firebase/firestore"
import { useState, useEffect } from 'react';


const Layout = () => {
  return (
    <div className="app">
      <Header/>
        <Outlet/>
      {/* <Footer/> */}

      {/* {dbProducts.map((product) => {
        return (
          <div className="item"> name: {product.title}</div>
        )
      })} */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/products/:id",
        element: <Products/>
      },
      {
        path:"/product/:id",
        element: <Product/>
      },

    ]
  },

])

function App() {

  const [dbProducts, setDbProducts] = useState([]);
  const ProductCollectionRef = collection(db, "products");

  useEffect(()=>{

    const getProducts = async () => {
      const data = await getDocs(ProductCollectionRef);
      // setDbProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id }) ));

      const fetchedProducts = data.docs.map((doc) => ({...doc.data(), id: doc.id }) );

      setDbProducts(fetchedProducts);

      // console.log(fetchedProducts)

    }

    try {
      getProducts();
    } catch (e) {
      console.error(e);
    }

  },[]);
  


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
