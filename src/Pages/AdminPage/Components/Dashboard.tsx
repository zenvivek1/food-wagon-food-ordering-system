"use client";

import { useState } from "react";
import AddFoodModal from "./Foods/AddFoodModel";
import { useNavigate } from "react-router-dom";
import RevenueGraph from "./Dummies/RevenueGraph";
import PlatformStatus from "./Dummies/PlatformStatus ";

const Dashboard = () => {
  const [openFood, setOpenFood] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-zinc-50 p-4 sm:p-6 lg:p-10 px-4 sm:px-8 lg:px-16">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Admin Dashboard, View & Edit platform administratives.
        </p>

        <RevenueGraph />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setOpenFood(true)}
              className="px-8 lg:px-16 py-4 lg:py-6 bg-primary hover:bg-primary-hover text-white rounded-lg text-md cursor-pointer font-medium transition"
            >
              + Add Food
            </button>

            <button
              onClick={() => navigate("/admin/restaurants")}
              className="px-8 lg:px-16 py-4 lg:py-6 bg-primary hover:bg-primary-hover text-white rounded-lg text-md cursor-pointer font-medium transition"
            >
              + Add Restaurant
            </button>

            <button className="px-8 lg:px-16 py-4 lg:py-6 bg-primary hover:bg-primary-hover text-white rounded-lg text-md cursor-pointer font-medium transition">
              Manage Orders
            </button>

            <button className="px-8 lg:px-16 py-4 lg:py-6 bg-primary hover:bg-primary-hover text-white rounded-lg text-md cursor-pointer font-medium transition">
              Users
            </button>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-gray-700">Admin</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-md font-semibold text-gray-500">Total Orders</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-1">1,248</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-md font-semibold text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-1">₹2.4L</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-md font-semibold text-gray-500">Active Foods</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-1">86</h2>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <p className="text-md font-semibold text-gray-500">Users</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-1">542</h2>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-4 lg:p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Orders
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">User</th>
                  <th className="pb-3">Food</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Amount</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b last:border-0">
                  <td className="py-3">#FW1021</td>
                  <td>Rahul</td>
                  <td>Paneer Tikka</td>
                  <td className="text-green-600 font-medium">Delivered</td>
                  <td>₹320</td>
                </tr>

                <tr className="border-b last:border-0">
                  <td className="py-3">#FW1022</td>
                  <td>Anjali</td>
                  <td>Dosa</td>
                  <td className="text-orange-500 font-medium">Pending</td>
                  <td>₹180</td>
                </tr>

                <tr>
                  <td className="py-3">#FW1023</td>
                  <td>Vikas</td>
                  <td>Burger</td>
                  <td className="text-red-500 font-medium">Cancelled</td>
                  <td>₹240</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <PlatformStatus />
      </div>

      <AddFoodModal open={openFood} onClose={() => setOpenFood(false)} />
    </>
  );
};

export default Dashboard;
