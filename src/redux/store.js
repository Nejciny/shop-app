import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./database";



const store = configureStore({
    reducer: {
        counter: counterReducer,
    }

});

export default store;