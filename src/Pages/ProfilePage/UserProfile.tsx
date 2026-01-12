import React, { useContext } from "react";
import { useAuth } from "../../Context/AuthContext";

const UserProfile = () => {

  const { user }  = useAuth();


  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-6">
      {/* Page Container */}
      <div className="w-full px-20 h-screen mx-auto space-y-10">

        {/* Header */}
        <h1 className="text-3xl font-bold text-orange-600">
          Profile
        </h1>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Profile Card */}
          <div className="rounded-xl p-6 flex gap-4 items-center">
            <div className="w-30 h-30 rounded-full bg-orange-200 flex items-center justify-center text-2xl font-bold text-orange-700">
              {user?.name[0]}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                {user?.name}
              </h2>
              <p className="text-gray-500 text-md">
                {user?.email}
              </p>
              <p className="text-gray-500 text-md">
                Edit Info
              </p>
            </div>
          </div>

          {/* Address Card */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Delivery Address
            </h3>
            <p className="text-gray-700">
              <span className="font-medium">Deliver To:</span> <br />
              Stackmentalists Ventures Pvt Ltd <br />
              Main Road, Pune <br />
              Maharashtra
            </p>
          </div>
        </div>

        {/* Past Orders */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-6">
            Past Orders
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            {/* Order Card */}
            <OrderCard />
            <OrderCard />
            <OrderCard />

          </div>
        </div>

      </div>
    </div>
  );
};

const OrderCard = () => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="Food"
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold">
          Paneer Butter Masala
        </h4>
        <p className="text-sm text-gray-500">
          ₹240 • Delivered
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
