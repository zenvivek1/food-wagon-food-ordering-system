import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../api/services/foodApi";
import { toast } from "sonner";
import { DeleteIcon, Frown, Trash } from "lucide-react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import FoodLoader from "../Pages/Loader/FoodLoader";
import { randomFoodEmoji } from "./FoodEmoji/randomFoodEmoji";

// Define the shape of our food items
interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  isDelivery?: boolean;
}

// const foodData: FoodItem[] = [
//     {
//         id: 1,
//     name: "Paneer Tikka Masala",
//     price: 299,
//     image: "https://via.placeholder.com/300x200",
//     isDelivery: true,
//   },
//   {
//     id: 2,
//     name: "Spicy Chicken Curry",
//     price: 350,
//     image: "https://via.placeholder.com/300x200",
//     isDelivery: true,
//   },
//   {
//     id: 3,
//     name: "Masala Pasta",
//     price: 250,
//     image: "https://via.placeholder.com/300x200",
//     isDelivery: true,
//   },
//   {
//     id: 4,
//     name: "Vegetable Biryani",
//     price: 390,
//     image: "https://via.placeholder.com/300x200",
//     isDelivery: true,
//   },
//   {
//     id: 5,
//     name: "Masala Dosa",
//     price: 150,
//     image: "https://via.placeholder.com/300x200",
//     isDelivery: true,
//   },
//   {
//     id: 6,
//     name: "Butter Chicken",
//     price: 450,
//     image: "https://via.placeholder.com/300x200",
//     isDelivery: true,
//   },
// ];

interface ProductsProps {
  label?: string;
  bg?: string;
}


const Products: React.FC<ProductsProps> = ({ label = "Foods", bg = "white" }) => {

const navigate = useNavigate();
const [loading, setLoading] = useState(true);

const [products, setproducts] = useState([]);

useEffect(() => {
  const getData = async () => {
    try {
      setLoading(true)
      const data = await getAllProducts();
      console.log(data)
      setproducts(data);
    } catch (err: any) {
      toast.error(err.error || "failed to load products");
    } finally {
        setLoading(false);
      }
  };
  getData();
}, []);

const handleDelete = async (id:Number)=>{
    try{
        const res = await deleteProduct(id);
        if(res){
            toast.success(res)
        }
    }catch(err:any){
        toast.error(err.error)
    }
}

  const { user } = useAuth();


  return (
    <section className={`max-w-7x mx-auto px-40 py-12 w-full bg-${bg}-50`}>
      {
        loading &&  <FoodLoader/>
      }
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{label}{randomFoodEmoji()}</h2>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {
        products.length===0? (
          <div className="col-span-4 text-center bg-primary left-0 py-3 text-2xl font-semibold text-white flex items-center justify-center rounded-2xl">Sorry! No products found at the moment! <Frown size={30} className="text-white mt-1 ml-2"/>
          </div>
        ):(
        products.length>0 && products.map((item:any) => (
          <div key={item.id} className="flex flex-col group relative hover:scale-105 transform transition ease  bg-white rounded-2xl shadow-lg p-6">
            { 
                user?.role==="admin" &&
                <div onClick={()=>{
                    handleDelete(item.id)}} title="delete" className="absolute text-red-500 bg-white rounded-full z-10 p-2 top-2 right-2 cursor-pointer">
                <Trash/>
            </div>    
            }

            {/* Image Container with Badge */}
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-58 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {item.isDelivery && (
                <div className="absolute bottom-3 left-3 bg-yellow-400 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <span>🚚</span> Delivery
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-900 truncate">
                {item.name}
              </h3>
              <div className="flex gap-3">
              <p className="text-gray-500 font-medium text-lg mb-4 line-through text-red-500">₹{item.price + 50}</p>
              <p className="text-gray-500 font-medium text-xl mb-4 ">₹{item.price}</p>
              </div>
            {
                user?.role==="admin" ?
                <button className="cursor-pointer mt-auto w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-200">
                Edit
              </button> :
                <button onClick={()=>{navigate(`/product/${item.id}`); window.location.reload() }} className="cursor-pointer mt-auto w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-200">
                Order Now
              </button>
            }
            </div>
          </div>
        )))}
      </div>
    </section>
  );
};

export default Products;
