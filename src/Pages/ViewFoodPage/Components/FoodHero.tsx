import { useNavigate, useParams } from "react-router-dom";
import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import { getOneProduct } from "../../../api/services/foodApi";
import { toast } from "sonner";
import { useAuth } from "../../../Context/AuthContext";
import { addToCart } from "../../../api/services/cartApi";
import api from "../../../api/AxiosApi";
import { useDispatch } from "react-redux";
import { increment } from "../../../redux/slices/cartTotalSlice";

interface food {
  id: number;
  name: string;
  price: number;
  category_id: number;
  restaurant_id: number;
  description: string;
  image_url: string;
  is_available: boolean;
}

const FoodHero = () => {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const [product, setproduct] = useState<food | null>(null);

  useEffect(() => {
    const fetchData = async (id: Number) => {
      try {
        const data = await getOneProduct(id);
        if (data) {
          setproduct(data);
        }
      } catch (err: any) {
        toast.error(err.error);
      }
    };
    fetchData(Number(id));
  }, []);

  const handleAddToCart = async () => {
  if (!product) return;

  try {
    await addToCart(product.id, 1);
    toast.success("Added to cart 🛒");
    dispatch(increment())
  } catch (err: any) {
    toast.error(err?.response?.data?.message || "Failed to add to cart");
  }
};

const handleOrderNow = async () => {
  if (!product) return;

  try {
    // 1. clear cart
    await api.delete("/cart/");

    // 2. add current product
    await api.post("/cart/items", {
      product_id: product.id,
      quantity: 1,
    });

    dispatch(increment())
    toast.success("Ready to checkout 🚀");

    // 3. redirect to checkout / cart
    navigate("/cart");
  } catch (err: any) {
    toast.error(
      err?.response?.data?.message || "Something went wrong"
    );
  }
};



  return (
    <section className="w-[80vw] mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* food image */}
        <div className="w-full">
          <img
            src={product?.image_url}
            alt="Food"
            className="w-full h-[520px] object-cover rounded-2xl"
          />
        </div>

        {/* food details */}
        <div className="space-y-5 ">
          <h1 className="text-4xl font-bold text-gray-900">{product?.name}</h1>

          <p className="text-gray-600 leading-relaxed">
            {product?.description}
          </p>
          <p className="text-xl font-semibold text-black">Delivered By</p>
          <Restaurant />
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-orange-500">
              ₹{product?.price}
            </span>
            {product?.is_available ? (
              <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
                In Stock
              </span>
            ) : (
              <span className="text-sm text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Out Of Stock
              </span>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 pt-4">
            {isLoggedIn ? (
              <>
                <button 
                onClick={handleOrderNow}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition">
                  Order Now
                </button>

                <button
                onClick={handleAddToCart}
                 className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-xl font-semibold transition">
                  Add to Cart
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/auth")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Sign In To Order
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodHero;
