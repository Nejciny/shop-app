import React, { useEffect, useState } from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from './Cart';

import { Link } from 'react-router-dom';

import "../CSS/Header.css"


import { useSelector } from 'react-redux';





function Header() {

  const items_in_cart = useSelector((state) => state.counter.cart);

  const num_of_itms = items_in_cart.length;

    // get the div element you want to close
  const cart = document.getElementById('cart');

  function open_cart(){
    let cart = document.getElementById('cart');

    cart.style.display = "block";
    cart.classList.add("active");

  }


  return (
    <nav className='container'>
      <div className="left">
    
        <Link to="/">
          <h1>LOGO</h1>
        </Link>

      </div>


      <div className="right">

        <div className="category">
          <div className="item">
            <Link to="/products/1">Men</Link>
          </div>
          <div className="item">
          <Link to="/products/0">Women</Link>
          </div>

        </div>



        <div className="icons">


          <div className="cartIcon icon" onClick={()=>open_cart()} >
            <ShoppingCartOutlinedIcon/>
            <span >{num_of_itms}</span>

          </div>
        </div>

      </div>

      <Cart/>


    </nav>

  )
}

export default Header