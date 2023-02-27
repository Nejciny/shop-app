import React from 'react'
import Item from "../compontents/Item"
import "../CSS/List.css";
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '../redux/database';
import { useEffect } from 'react';
import store from '../redux/store';

import { db } from '../firebase-config';
import {collection, getDocs} from "firebase/firestore"



import { product_category, sort_items, filter_price, selected_gender } from '../redux/database';



function List() {





    const ProductCollectionRef = collection(db, "products");

    // REDUX
    const sort = useSelector((state) => state.counter.sort);
    const category = useSelector((state) => state.counter.category);
    const price = useSelector((state) => state.counter.price);
    const gender = useSelector((state) => state.counter.gender);


    const count  = useSelector((state) => state.counter.count );
    const dispatch = useDispatch();

    const filtered_items = count.filter(item => item.category == category && item.gender == gender);

    console.log(gender);



    if (sort == "desc"){
        filtered_items.sort((a, b) => b.price - a.price);
    }
    else{
        filtered_items.sort((a, b) => a.price - b.price);
    }


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


    return (
    <div className='list'>
        {filtered_items?.map(item => (
            <div className="itm">
                <Item item={item} key={item.id}/>
            </div>
            
            
        ))}



    </div>
    )
}

export default List