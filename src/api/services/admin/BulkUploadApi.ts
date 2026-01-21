import { toast } from "sonner";
import type { createFoodPayload } from "../../../Interfaces/Foods";
import { createProduct } from "./foodApi"


export const BulkFoodUpload = async (FoodBulkData:createFoodPayload[]) =>{
    try{
        for(const food of FoodBulkData){
           await createProduct(food); 
        }
        toast.success("All foods added successfully 🎉");
  } catch (err) {
    toast.error("Error while adding foods");
    throw err;
  }
};

