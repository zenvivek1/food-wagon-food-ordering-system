import { configureStore } from "@reduxjs/toolkit";
import { cartTotalSlice } from "./slices/cartTotalSlice";


export const store = configureStore({
    reducer : {
        cartTotalItems: cartTotalSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;