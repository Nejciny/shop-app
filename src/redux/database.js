import { createSlice } from '@reduxjs/toolkit'

import { db } from '../firebase-config';
import {collection, getDocs} from "firebase/firestore"
import { useState, useEffect } from 'react';

const databaseSlice = createSlice({
  name: 'counter',
  initialState: {
    count: [
      {
        title: "some title",
        price: 20,
      }
    ],
    sort: "",
    category: "shirts",
    gender: "men",
    price: 100,
    cart: [],
  },
  reducers: {
    populate: (state, action) => {
      state.count = action.payload;
    },
    sort_items: (state, action) => {
      state.sort = action.payload;
    },
    product_category: (state, action) => {
      state.category = action.payload;
    },
    filter_price: (state, action) => {
      state.price = action.payload;
    },
    selected_gender: (state, action) => {
      state.gender = action.payload;
    },
    add_to_cart: (state, action) => {
      state.cart =  [...state.cart,action.payload];

    },
    remove_from_cart: (state, action) => {
      state.cart = state.cart.filter(obj => obj.id !== action.payload);
    },
    

  }
})

export const { populate, sort_items, product_category, filter_price, selected_gender, add_to_cart, remove_from_cart } = databaseSlice.actions

export default databaseSlice.reducer;