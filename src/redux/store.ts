import { configureStore } from "@reduxjs/toolkit";
import { cartTotalSlice } from "./slices/cartTotalSlice";
import { foodCategoriesSlice } from "./slices/foodCatergories";

export const store = configureStore({
    reducer : {
        cartTotalItems: cartTotalSlice.reducer,
        foodCategories: foodCategoriesSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;