import api from "../../AxiosApi"


export const getFoodCategories = async () => {
    try{
        const response = await api.get("/categories/")
        return response.data;
    }catch(error: any){
        throw error.response?.data || error;   
    }
}

export const getFoodByCategory = async (id: string) => {
    try{
        const response = await api.get(`/categories/${id}`)
        return response.data;
    }catch(error: any){
        throw error.response?.data || error;   
    }
}