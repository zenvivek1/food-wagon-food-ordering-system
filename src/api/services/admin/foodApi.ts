import type { createFoodPayload } from "../../../Interfaces/Foods";
import api from "../../AxiosApi";


// CREATE FOOD
export const createProduct = async (payload : createFoodPayload)  =>{
    try{
        const res = await api.post("/products/", payload);
        return res.data.message;
    }catch(err : any){
        throw err.response?.data || err;
    }
}


// UPDATE FOOD
export const updateFood = async (payload : createFoodPayload,id : string)  =>{
    try{
        const res = await api.patch(`/products/${id}`, payload);
        return res.data.message;
    }catch(err : any){
        throw err.response?.data || err;
    }
}
