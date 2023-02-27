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


  useEffect(()=>{

    // get the div element you want to close
    const cart = document.getElementById('cart');

    const bodyClick = function(event) {
      // check if the clicked element is NOT inside the div
      if (!cart.contains(event.target)) {
        // if it's not, hide the div
        // cart.style.display = 'none';
        cart.classList.remove("active");
      }
    };
    // add a click event listener to the document
    document.addEventListener('click', bodyClick, true );

    return () => {
      document.removeEventListener("click", bodyClick, true);
    }

  },[]);
  


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
