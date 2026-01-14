  "use client";

  import { useEffect, useState } from "react";
  import { Trash } from "lucide-react";
  import { toast } from "sonner";
  import { useNavigate } from "react-router-dom";
  import Products from "../../../../Components/Products";

  import {
    getCart,
    updateCartItemQty,
    removeCartItem,
    clearCartItems,
    checkoutCart,
  } from "../../../../api/services/cartApi";
  import FoodLoader from "../../../Loader/FoodLoader";
import { useDispatch } from "react-redux";
import { setZero } from "../../../../redux/slices/cartTotalSlice";

  interface CartItem {
    product_id: number;
    product_name: string;
    price_at_time: number;
    product_image: string;
    quantity: number;
  }

  const Cart = () => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const fetchCart = async () => {
      try {
        const res = await getCart();
        setItems(res.data.items || []);
      } catch {
        toast.error("Failed to load cart");
      } finally {
        setLoading(false);
      }
    };

    const handleCheckout = async () => {
      try {
        const res = await checkoutCart();
        const orderId = res.data.id;

        toast.success("Order created");
        navigate("/checkout", { state: { orderId } });
      } catch (err: any) {
        toast.error(err?.response?.data?.message || "Checkout failed");
      }
    };

    const updateQty = async (productId: number, qty: number) => {
      if (qty < 1) return;

      try {
        setItems(prev =>
          prev.map(item =>
            item.product_id === productId
              ? { ...item, quantity: qty }
              : item
          )
        );
        await updateCartItemQty(productId, qty);
      } catch {
        toast.error("Failed to update quantity");
      }
    };

    const removeItem = async (productId: number) => {
      try {
        setItems(prev =>
          prev.filter(item => item.product_id !== productId)
        );
        await removeCartItem(productId);
        toast.success("Item removed");
      } catch {
        toast.error("Failed to remove item");
      }
    };

    const clearCart = async () => {
      try {
        setItems([]);
        await clearCartItems();
        dispatch(setZero()) //CartIcon redux zero
        toast.success("Cart cleared");
      } catch {
        toast.error("Failed to clear cart");
      }
    };

    useEffect(() => {
      fetchCart();
    }, []);

    //total calculation
    const total = items.reduce(
      (sum, item) => sum + item.price_at_time * item.quantity,
      0
    );

    if (loading)
      return <FoodLoader/>;

    if (!items.length)
      return (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold py-10">Your cart is empty 🛒</h2>
          <Products label="Order Something For Yourself!" bg="white"/>
        </div>
      );
return (
  <div className="min-h-screen bg-gradient-to-b from-orange-50/40 via-white to-white py-14 px-6">
    <div className="max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Your Cart
        </h1>
        <p className="text-gray-600 mt-1">
          Almost there, review your items
        </p>
      </div>

      {/* CART LIST */}
      <div className="space-y-8">
        {items.map(item => (
          <div
            key={item.product_id}
            className="bg-white rounded-3xl p-6 sm:p-8
                       shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">

              {/* IMAGE */}
              <img
                src={item.product_image}
                alt={item.product_name}
                className="w-full sm:w-40 h-40 rounded-2xl object-cover border"
              />

              {/* INFO */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.product_name}
                  </h3>

                  <p className="text-orange-500 text-xl font-bold mt-2">
                    ₹{item.price_at_time}
                    <span className="text-sm text-gray-500 font-normal">
                      {" "}per item
                    </span>
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 border rounded-2xl px-4 py-2">
                      <button
                        onClick={() =>
                          updateQty(item.product_id, item.quantity - 1)
                        }
                        className="text-xl font-semibold hover:text-orange-500"
                      >
                        −
                      </button>

                      <span className="text-lg font-medium min-w-[24px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQty(item.product_id, item.quantity + 1)
                        }
                        className="text-xl font-semibold hover:text-orange-500"
                      >
                        +
                      </button>
                    </div>

                    <Trash
                      onClick={() => removeItem(item.product_id)}
                      className="text-red-500 cursor-pointer hover:scale-110 transition"
                      size={22}
                    />
                  </div>

                  {/* ITEM TOTAL */}
                  <p className="text-xl font-bold text-gray-900">
                    ₹{item.price_at_time * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL SECTION */}
      <div className="mt-14 border-t pt-8">
        <div className="flex justify-between items-center text-2xl font-bold">
          <span>Total Amount</span>
          <span className="text-orange-500">₹{total}</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            onClick={clearCart}
            className="border border-red-200 text-red-500 px-6 py-3 rounded-2xl
                       hover:bg-red-50 transition"
          >
            Clear Cart
          </button>

          <button
            onClick={handleCheckout}
            className="bg-orange-500 hover:bg-orange-600
                       text-white px-10 py-4 rounded-2xl
                       text-lg font-semibold shadow-lg
                       active:scale-[0.98] transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

    </div>
  </div>
);

  };

  export default Cart;