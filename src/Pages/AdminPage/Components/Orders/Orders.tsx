"use client";

import React from "react";

const Orders = () => {
  return (
    <div className="min-h-screen bg-zinc-50 p-10 px-16">
      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
        <p className="text-sm text-gray-500">
          Manage and track all customer orders
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-sm font-semibold text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold text-primary mt-1">1,248</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-sm font-semibold text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold text-orange-500 mt-1">86</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-sm font-semibold text-gray-500">Delivered</p>
          <h2 className="text-2xl font-bold text-green-600 mt-1">1,102</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-sm font-semibold text-gray-500">Cancelled</p>
          <h2 className="text-2xl font-bold text-red-500 mt-1">60</h2>
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Orders
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">User</th>
                <th className="pb-3">Restaurant</th>
                <th className="pb-3">Food</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {/* ROW */}
              <tr className="border-b last:border-0">
                <td className="py-4">#FW1021</td>
                <td>Rahul</td>
                <td>Spice Garden</td>
                <td>Paneer Tikka</td>
                <td className="text-green-600 font-medium">Delivered</td>
                <td>₹320</td>
                <td>
                  <button className="text-primary hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr className="border-b last:border-0">
                <td className="py-4">#FW1022</td>
                <td>Anjali</td>
                <td>Dosa Corner</td>
                <td>Masala Dosa</td>
                <td className="text-orange-500 font-medium">Pending</td>
                <td>₹180</td>
                <td>
                  <button className="text-primary hover:underline">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td className="py-4">#FW1023</td>
                <td>Vikas</td>
                <td>Burger Hub</td>
                <td>Cheese Burger</td>
                <td className="text-red-500 font-medium">Cancelled</td>
                <td>₹240</td>
                <td>
                  <button className="text-primary hover:underline">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
