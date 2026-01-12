"use client";

import { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import api from "../../../../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import Products from "../../../../Components/Products";

interface CartItem {
  product_id: number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleCheckout = async () => {
  try {
    const res = await api.post("/orders/checkout");

    const orderId = res.data.data.id;

    toast.success("Order created");

    navigate("/checkout", {
      state: { orderId },
    });
  } catch (err: any) {
    toast.error(err?.response?.data?.message || "Checkout failed");
  }
};


  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart/");
      setItems(res.data.data.items || []);
      if(res){
        // toast.success("Cart fetched Successfully!");
        console.log(res)
      }
    } catch {
      toast.error("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  const updateQty = async (productId: number, qty: number) => {
    if (qty < 1) return;

    try {
      await api.patch(`/cart/items/${productId}`, {
        quantity: qty,
      });

      setItems(prev =>
        prev.map(item =>
          item.product_id === productId
            ? { ...item, quantity: qty }
            : item
        )
      );
    } catch {
      toast.error("Failed to update quantity");
    }
  };

  const removeItem = async (productId: number) => {
    try {
      await api.delete(`/cart/items/${productId}`);
      setItems(prev =>
        prev.filter(item => item.product_id !== productId)
      );
      toast.success("Item removed");
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const clearCart = async () => {
    try {
      await api.delete("/cart/");
      setItems([]);
      toast.success("Cart cleared");
    } catch {
      toast.error("Failed to clear cart");
    }
  };

  const total = items.reduce(
    (sum, item) => sum + item.price_at_time * item.quantity,
    0
  );

  if (loading)
    return <p className="text-center mt-20">Loading cart...</p>;

  if (!items.length)
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
        <Products label="Order Something For Yourself!"/>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <button
          onClick={clearCart}
          className="text-red-500 border border-red-500 px-4 py-2 rounded-lg"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {items.map(item => (
          <div
            key={item.product_id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.product_image}
                alt={item.product_name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.product_name}</h3>
                <p className="text-orange-600 font-bold">₹{item.price_at_time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  updateQty(item.product_id, item.quantity - 1)
                }
                className="px-3 py-1 border rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  updateQty(item.product_id, item.quantity + 1)
                }
                className="px-3 py-1 border rounded"
              >
                +
              </button>

              <Trash
                onClick={() => removeItem(item.product_id)}
                className="text-red-500 cursor-pointer ml-4"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-semibold">
          Total: <span className="text-orange-600">₹{total}</span>
        </h2>
        <button
        onClick={handleCheckout}
         className="px-8 py-3 bg-orange-500 text-white rounded-xl">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
