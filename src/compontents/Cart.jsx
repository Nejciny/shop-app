import React from 'react'
import "../CSS/Cart.css"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart,} from '../redux/database';
import store from '../redux/store';

function Cart() {

    const data  = useSelector((state) => state.counter.cart );



    let subTotal = 0;

    data.map(itm => {

        let itm_price = itm.price * itm.itm_quantity;

        subTotal += itm_price;

    }

    );

    return (
        <div className='cart ' id='cart'>
            <h1> Products in your cart</h1>
            {data?.map(item =>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />

                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,30)}</p>
                        <div className="price"> {item.itm_quantity} x {item.price}€</div>
                    </div>
                    
                    <div className='delete' onClick={()=>store.dispatch(remove_from_cart(item.key))}>
                        <DeleteOutlinedIcon />
                    </div>
                </div>
            ))}

            <div className="total">
                <span>TOTAL</span>
                <span>{subTotal}€</span>
            </div>

            <button onClick={()=>alert("this is a dummy store. Checkout is not operational!")} > CHECKOUT</button>


        </div>

        
    )
}

export default Cart