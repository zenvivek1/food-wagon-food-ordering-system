"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../../api/AxiosApi";
import {
  ShieldCheck,
  ShoppingBag,
  ReceiptText,
  CreditCard,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface OrderItem {
  product_name: string;
  quantity: number;
  price_at_time: number;
}

const DummyCheckout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderId = state?.orderId;

  const [items, setItems] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      navigate("/");
      return;
    }
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {
      const res = await api.get(`/orders/${orderId}`);
      setItems(res.data.data.items);
      setTotal(res.data.data.total_amount);
    } catch {
      toast.error("Failed to load order");
    } finally {
      setLoading(false);
    }
  };

  const loadRazorpay = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });

  const openRazorpay = async () => {
    const loaded = await loadRazorpay();
    if (!loaded) {
      toast.error("Razorpay SDK failed");
      return;
    }

    try {
      const res = await api.post("/payments/create-session", {
        order_id: orderId,
      });

      const session = res.data.data;

      const options = {
        key: session.key_id,
        order_id: session.order_id,
        amount: session.amount * 100,
        currency: session.currency,
        name: "Food Wagon",
        description: `Order #${orderId}`,
        handler: async (response: any) => {
          try {
            await api.post("/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            toast.success("Payment Successful 🎉");
            navigate(`/order-success/${orderId}`);
          } catch {
            toast.error("Payment verification failed");
          }
        },
        theme: { color: "#f97316" },
      };

      new window.Razorpay(options).open();
    } catch {
      toast.error("Payment failed");
    }
  };

  if (loading)
    return (
      <p className="text-center mt-32 text-lg font-medium">
        Loading checkout...
      </p>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-2">Checkout</h1>
        <p className="text-gray-600 mb-10">
          Review your order and complete payment
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">
            {/* ORDER INFO */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <ReceiptText className="text-orange-500" />
                <h2 className="text-2xl font-semibold">Order Details</h2>
              </div>

              <p className="text-gray-500 mb-6">
                Order ID:{" "}
                <span className="font-semibold text-gray-900">#{orderId}</span>
              </p>

              <div className="space-y-6">
                {items.map((item:any, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={item?.image_urls[0]}
                        alt={item?.product_name}
                        className="w-20 h-20 rounded-2xl object-cover shadow-md border"
                      />

                      <div>
                        <p className="text-lg font-medium">
                          {item.product_name}
                        </p>
                        <p className="text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg font-semibold">
                      ₹{item.price_at_time * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DELIVERY INFO (DUMMY) */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="text-orange-500" />
                <h2 className="text-2xl font-semibold">Delivery Info</h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Your order will be delivered to your saved address within
                <span className="font-semibold text-gray-900">
                  {" "}
                  30–40 minutes
                </span>
                . Please ensure your phone is reachable.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-3xl shadow-xl p-8 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-orange-500" />
              <h2 className="text-2xl font-semibold">Payment Summary</h2>
            </div>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span className="text-green-600">FREE</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-orange-500">₹{total}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-green-600 mt-6">
              <ShieldCheck size={18} />
              Secure payment powered by Razorpay
            </div>

            <button
              onClick={openRazorpay}
              className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-lg font-semibold"
            >
              Pay ₹{total}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyCheckout;
