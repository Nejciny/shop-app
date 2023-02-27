import React, { useState } from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from './Cart';

import { Link } from 'react-router-dom';

import "../CSS/Header.css"


import { useSelector } from 'react-redux';





function Header() {

  const items_in_cart = useSelector((state) => state.counter.cart);

  const num_of_itms = items_in_cart.length;

  const [open, setOpen] = useState(false);



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


          <div className="cartIcon icon" onClick={()=>setOpen(!open)}>
            <ShoppingCartOutlinedIcon/>
            <span >{num_of_itms}</span>

          </div>
        </div>

      </div>

      {open && <Cart/>}


    </nav>

  )
}

export default Header