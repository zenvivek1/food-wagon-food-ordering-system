import api from "../../AxiosApi";

interface createPayload{
  "name": String,
  "price": Number,
  "category_id": Number,
  "restaurant_id": Number,
  "description": String,
  "image_url": String,
  "is_available": Boolean
}


// CREATE FOOD
export const createProduct = async (payload : createPayload)  =>{
    try{
        const res = await api.post("/products/", payload);
        return res.data.message;
    }catch(err : any){
        throw err.response?.data || err;
    }
}
