import React from 'react'
import "../CSS/Item.css"
import { Link } from 'react-router-dom';


const Item = ( {item} ) => {
  return (
    <div className='itm'>
      <Link className='link' to={'/product/'+item.id}>
        <div className="card">
          <div className="image">
            <img src={item.img} className="mainImg"></img>
            <img src={item.img2} className="secondImg"></img>
          </div>
        <h2>{item.title}</h2>
        <h3>{item.price}€</h3>

        </div>

      </Link>


    </div>
  )
}

export default Item;