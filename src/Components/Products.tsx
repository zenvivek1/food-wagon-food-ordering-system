import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProducts } from "../api/services/foodApi";
import { toast } from "sonner";
import { DeleteIcon, Trash } from "lucide-react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

// Define the shape of our food items
interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  isDelivery?: boolean;
}

const foodData: FoodItem[] = [
    {
        id: 1,
    name: "Paneer Tikka Masala",
    price: 299,
    image: "https://via.placeholder.com/300x200",
    isDelivery: true,
  },
  {
    id: 2,
    name: "Spicy Chicken Curry",
    price: 350,
    image: "https://via.placeholder.com/300x200",
    isDelivery: true,
  },
  {
    id: 3,
    name: "Masala Pasta",
    price: 250,
    image: "https://via.placeholder.com/300x200",
    isDelivery: true,
  },
  {
    id: 4,
    name: "Vegetable Biryani",
    price: 390,
    image: "https://via.placeholder.com/300x200",
    isDelivery: true,
  },
  {
    id: 5,
    name: "Masala Dosa",
    price: 150,
    image: "https://via.placeholder.com/300x200",
    isDelivery: true,
  },
  {
    id: 6,
    name: "Butter Chicken",
    price: 450,
    image: "https://via.placeholder.com/300x200",
    isDelivery: true,
  },
];

interface ProductsProps {
  label?: string;
}

const Products: React.FC = ({ label = "Foods" }:ProductsProps) => {

const navigate = useNavigate();


const [products, setproducts] = useState([]);

useEffect(() => {
  const getData = async () => {
    try {
      const data = await getAllProducts();
      console.log(data)
      setproducts(data);
    } catch (err: any) {
      toast.error(err.error);
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

const { user } = useAuth()

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">{label}</h2>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.length>0 && products.map((item:any) => (
          <div key={item.id} className="flex flex-col group relative">
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
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
              <p className="text-gray-500 font-medium mb-4">₹{item.price}</p>
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
        ))}
      </div>
    </section>
  );
};

export default Products;
