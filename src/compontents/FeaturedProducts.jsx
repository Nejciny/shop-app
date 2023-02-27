import { Card } from '@mui/material'
import React from 'react'
import Item from './Item'
import "../CSS/FeaturedProducts.css"

import { db } from '../firebase-config';
import {collection, getDocs} from "firebase/firestore"
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { populate } from '../redux/database';
import store from '../redux/store';

function FeaturedProducts() {

    const ProductCollectionRef = collection(db, "products");


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

    return (
    <div className='featuredProducts'>
        <h1>Featured Products</h1>

        <div className="products">
            {count.map(item =>{
                return item.featured
                ? <Item item={item} key={item.id}  />
                : ""
                
            })}
        </div>


    </div>
    )
    }

export default FeaturedProducts