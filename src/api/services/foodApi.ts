import api from "../AxiosApi";



export const getAllProducts = async () => {
  try {
    const res = await api.get("/products/");
    return res.data.data;
  } catch (err: any) {
    throw err.response?.data || err;        
  }
};

export const getOneProduct = async (id:Number) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data.data;
  } catch (err: any) {
    throw err.response?.data || err;        
  }
};

export const deleteProduct = async (id:Number) => {
    try{
        const res = await api.delete(`/products/${id}`)
        return res.data.message;
    } catch(err:any){
        throw err.response?.data || err;        
    }
}