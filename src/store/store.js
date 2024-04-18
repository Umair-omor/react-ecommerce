import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../components/slices/sidebarSlice";
import productReducer from "../components/slices/productSlice";
import cartReducer from "../components/slices/cartSlice";



const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        products: productReducer,
        cart: cartReducer

    }
});

export default store;