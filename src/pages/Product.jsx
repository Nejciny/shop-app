import React, { useState } from 'react'
import "../CSS/Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";

import { useParams } from "react-router-dom";



import { db } from '../firebase-config';
import {collection, getDocs} from "firebase/firestore"
import {  useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { populate, add_to_cart } from '../redux/database';
import store from '../redux/store';

function Product() {

  const ProductCollectionRef = collection(db, "products");


  const cartList  = useSelector((state) => state.counter.cart );
  const count  = useSelector((state) => state.counter.count );
  const dispatch = useDispatch();


  useEffect(()=>{

      const getProducts = async () => {
          const data = await getDocs(ProductCollectionRef);
          const fetchData = data.docs.map((doc) => ({...doc.data(), id: doc.id }) );

          store.dispatch(populate(fetchData));
       
      }
  
      try {
      getProducts();
      } catch (e) {
      console.error(e);
      }


  },[]);

  const product_id = useParams().id;

  const product =  count.filter(product=>  product.id === product_id);  


  // console.log( count)
  // console.log("product_id: "+ product_id)
  // console.log("product: ");
  // console.log( product);


  // console.log(product.0)


  const[selectedImg, setSelectedImg] = useState(product.map(product => product.img));
  const[quantity, setQuantity] = useState(1);

  const images = [
    "//images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
  ]

  let itm_key = useSelector((state) => state.counter.cart_key );

  function cart(itm_id){

    const itm = count.filter(product=> product.id == itm_id );



    // ADD QUANTITY TO OBJECT

    const newitm = ({...itm[0], itm_quantity: quantity, key: itm_key})

    store.dispatch(add_to_cart(newitm));
    
    const popup = document.getElementById("popup_container")
    popup.style.display = "unset";

    console.log(newitm);
      
  }

  function close_popup(){
    const popup = document.getElementById("popup_container");

    popup.style.display = "none";
  }

  return (
    
    
    <div className='test'>

      {product.map(product => 
            <div className="product">
            <div className="left">
      
              <div className="images">
                <img src={product.img} alt="" onClick={e => setSelectedImg(product.img)} />
                <img src={product.img2} alt="" onClick={e => setSelectedImg(product.img2)} />
              </div>
      
              <div className="mainImg">
                <img src={selectedImg} alt="" />
              </div>
      
              </div>
      
              <div className="right">
              <h1>{product.title}</h1>
              <div className='price'>{product.price}€</div>
              <p>{product.desc}</p>
      
      
              <div className="quantity">
                <button onClick={()=>setQuantity(prev => prev == 1 ? 1 : prev - 1 )}> - </button>
                {quantity}
                <button onClick={()=>setQuantity(prev => prev + 1)}> + </button>
              </div>
      
              <button className="add" onClick={()=>cart(product.id)}>
                <AddShoppingCartIcon /> ADD TO CART
              </button>
      
              </div>


              <div className="add_success popup_container" id="popup_container">
                <div className="popup">
                  <button className='close_popup' onClick={()=>close_popup()}>X</button>
                  <p>Product was added to your cart!</p>
                </div>
              </div>

              <div className="add_failed popup_container"> Product is already in your cart!</div>
      
            </div>


      )}


      



    </div>
  )
}

export default Product