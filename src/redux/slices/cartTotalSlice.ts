import { createSlice } from "@reduxjs/toolkit";


export const cartTotalSlice = createSlice({
    initialState : 0,
    name : "CartTotalItems",
    reducers : {
        increment : (s)=>s+1,
        decremet : (s)=>s-1,
        setZero: (s)=>0,
    }
})

export const {increment,decremet,setZero} = cartTotalSlice.actions;