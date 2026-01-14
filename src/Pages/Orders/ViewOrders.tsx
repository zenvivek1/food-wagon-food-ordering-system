"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  PackageCheck,
  Clock,
  XCircle,
  Truck,
} from "lucide-react";
import FoodLoader from "../Loader/FoodLoader";
import { cancelOrderById, getOrders } from "../../api/services/orders/ordersApi";
import type { Order } from "../../Interfaces/Orders";


const ViewOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);


  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch {
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId: number) => {
    try {
      await cancelOrderById(orderId);
      toast.success("Order cancelled");
      fetchOrders();
    } catch {
      toast.error("Unable to cancel order");
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === "confirmed")
      return "bg-green-100 text-green-700";
    if (status === "cancelled")
      return "bg-red-100 text-red-600";
    return "bg-yellow-100 text-yellow-700";
  };

  if (loading)
    return (
    <FoodLoader height="screen"/>
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
  <div className="min-h-screen bg-gradient-to-b from-orange-50/40 via-white to-white py-14 px-6">
    <div className="max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="space-y-4 mb-12">
      <h1 className="text-4xl font-bold text-gray-900">
        My Orders
      </h1>
      <h2 className="text-xl font-bold text-primary">Total Orders : <span>{orders.length}</span></h2>
      </div>

      <div className="space-y-12">
        {orders.map(order => (
          <div
            key={order.id}
            className="bg-white rounded-3xl p-8
                       shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          >
            {/* ORDER HEADER */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
              <div>
                <p className="text-sm text-gray-500">
                  Order ID
                </p>
                <p className="text-xl font-semibold">
                  #{order.id}
                </p>
              </div>

              <span
                className={`px-5 py-1.5 rounded-full text-sm font-semibold
                  ${getStatusBadge(order.status)}`}
              >
                {order.status.toUpperCase()}
              </span>
            </div>

            {/* ITEMS LIST */}
            <div className="space-y-8">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="border-b last:border-none "
                >
                  <div className="flex flex-col sm:flex-row gap-6">

                    {/* IMAGE */}
                    <img
                      src={item.image_urls?.[0]}
                      alt={item.product_name}
                      className="w-full sm:w-36 h-36 rounded-2xl
                                 object-cover border shadow-sm"
                    />

                    {/* INFO */}
                    <div className="flex-1 flex flex-col justify-around">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.product_name}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          Quantity:{" "}
                          <span className="font-medium">
                            {item.quantity}
                          </span>
                        </p>
                      </div>

                      {/* ITEM TOTAL */}
                      <p className="text-xl font-bold text-gray-900 mt-4">
                        ₹{item.price_at_time * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER TOTAL */}
            <div className="border-t pt-6 mt-8 flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="text-gray-700">
                <p className="text-lg">
                  Total Amount
                </p>
                <p className="text-2xl font-bold text-orange-500">
                  ₹{order.total_amount}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Payment:{" "}
                  <span className="font-medium">
                    {order.payment_status}
                  </span>
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 items-start">
                {order.uber_tracking_url && (
                  <a
                    href={order.uber_tracking_url}
                    target="_blank"
                    className="flex items-center gap-2 px-5 py-3
                               rounded-2xl border hover:bg-gray-50 transition"
                  >
                    <Truck size={18} />
                    Track Order
                  </a>
                )}

                {order.status === "pending" && (
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    className="flex items-center gap-2 px-5 py-3
                               rounded-2xl border border-red-400
                               text-red-500 hover:bg-red-50 transition"
                  >
                    <XCircle size={18} />
                    Cancel
                  </button>
                )}
              </div>
            </div>

            {/* TIME */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-6">
              <Clock size={16} />
              {new Date(order.created_at).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default ViewOrders;
