import React, { useEffect, useState } from 'react'
import Slider from '../compontents/Slider'
import List from '../compontents/List'
import { useParams } from 'react-router-dom'
import "../CSS/Products.css"

import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { product_category, sort_items, filter_price, selected_gender } from '../redux/database';



function Products() {

  const sort = useSelector((state) => state.counter.sort);
  const category = useSelector((state) => state.counter.category);
  const price = useSelector((state) => state.counter.price);
  const gender = useSelector((state) => state.counter.gender);
  
  const genderID = useParams().id;


  useEffect(()=>{
    store.dispatch(selected_gender(genderID));
  },[genderID])

  


  function sort_dir(direction){
    store.dispatch(sort_items(direction));


  }

  function change_category(checkbox){
    store.dispatch(product_category(checkbox));

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

		for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].id !== checkbox) {
        checkboxes[i].checked = false;
      }
      else {
        checkboxes[i].checked = true;
      }
    }

  }

  function price_filter_change(e){
    store.dispatch(filter_price(e));

  }

  // useEffect(()=>{
  //   console.log(sort);
  // },[sort]);

  // useEffect(()=>{
  //   console.log(category);
  // },[category]);
  // useEffect(()=>{
  //   console.log(price);
  // },[price]);




  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>

 

          <div className="inputItem checkInput">
            <input type="checkbox" id='shoes' value={1} onChange={()=>change_category("shoes")}  />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem checkInput">
            <input type="checkbox" id='shirts' value={1} onChange={()=>change_category("shirts")} />
            <label htmlFor="1">Shirts</label>
          </div>
          <div className="inputItem checkInput">
            <input type="checkbox" id='jeans' value={1} onChange={()=>change_category("jeans")} />
            <label htmlFor="1">Jeans</label>
          </div>

        </div>



        {/* <div className="filterItem">
          <h2>Filter by price</h2>

          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} value={100} onChange={(e)=>price_filter_change(e.target.value)} />
            <span>{price}€</span>
          </div>

        </div> */}

        <div className="filterItem">
          <h2>Sort by</h2>

          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={(e) => sort_dir("asc")} />
            <label htmlFor="asc">Price (Lowest first) </label>
          </div>

          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price' onChange={(e) => sort_dir("desc")} />
            <label htmlFor="desc">Price (Highest first) </label>
          </div>


        </div>
      </div>

      <div className="right">
        <img
          className="catImg"
          src={genderID==1?"../images/men_banner.png" : "../images/women_banner.png"}
          alt=""
          height={800}
        />

        <List />
        
      </div>


    </div>
  )
}

export default Products