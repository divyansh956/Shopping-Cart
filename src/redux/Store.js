import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { TotalPriceSlice } from "./Slices/TotalPrice";

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        totalPrice: TotalPriceSlice.reducer,
    }
});