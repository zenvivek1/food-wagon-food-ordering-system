"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  PackageCheck,
  Clock,
  XCircle,
  Truck,
} from "lucide-react";
import api from "../../api/AxiosApi";

interface OrderItem {
  product_name: string;
  quantity: number;
  price_at_time: number;
  product_image?: string;
}

interface Order {
  id: number;
  status: string;
  payment_status: string;
  total_amount: number;
  created_at: string;
  uber_tracking_url?: string;
  items: OrderItem[];
}

const ViewOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders/");
      setOrders(res.data.data || []);
    } catch {
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  const cancelOrder = async (orderId: number) => {
    try {
      await api.post(`/orders/${orderId}/cancel`);
      toast.success("Order cancelled");
      fetchOrders();
    } catch {
      toast.error("Unable to cancel order");
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === "completed")
      return "bg-green-100 text-green-700";
    if (status === "cancelled")
      return "bg-red-100 text-red-600";
    return "bg-yellow-100 text-yellow-700";
  };

  if (loading)
    return (
      <p className="text-center mt-32 text-lg font-medium">
        Loading orders...
      </p>
    );

  if (!orders.length)
    return (
      <div className="text-center mt-32">
        <PackageCheck className="mx-auto mb-4 text-gray-400" size={60} />
        <h2 className="text-2xl font-semibold">
          No orders yet
        </h2>
        <p className="text-gray-500 mt-2">
          Your orders will appear here once you place them
        </p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">
        My Orders
      </h1>

      <div className="space-y-8">
        {orders.map(order => (
          <div
            key={order.id}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500">
                  Order ID
                </p>
                <p className="font-semibold text-lg">
                  #{order.id}
                </p>
              </div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusBadge(
                  order.status
                )}`}
              >
                {order.status.toUpperCase()}
              </span>
            </div>

            {/* ITEMS */}
            <div className="space-y-4 mb-6">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div className="flex items-center gap-4">
                <img
  src={item.image_urls?.[0]}
  alt={item.product_name}
  className="w-16 h-16 rounded-2xl object-cover shadow-md border"
/>
                    <div>
                      <p className="font-medium">
                        {item.product_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="font-semibold">
                    ₹{item.price_at_time * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-gray-600">
                <p>
                  Total:{" "}
                  <span className="font-bold text-gray-900">
                    ₹{order.total_amount}
                  </span>
                </p>
                <p className="text-sm">
                  Payment:{" "}
                  <span className="font-medium">
                    {order.payment_status}
                  </span>
                </p>
              </div>

              <div className="flex gap-3">
                {order.uber_tracking_url && (
                  <a
                    href={order.uber_tracking_url}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                  >
                    <Truck size={18} />
                    Track
                  </a>
                )}

                {order.status === "pending" && (
                  <button
                    onClick={() => cancelOrder(order.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl border border-red-500 text-red-500"
                  >
                    <XCircle size={18} />
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* TIME */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
              <Clock size={16} />
              {new Date(order.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewOrders;
