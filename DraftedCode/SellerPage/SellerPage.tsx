"use client";

import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SellerPage = () => {
  const navigate = useNavigate();

  // This should come from backend
  const sellerHasRestaurant = false;

  return (
    <div className="min-h-[80vh] px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Seller Dashboard
      </h1>

      {sellerHasRestaurant ? (
        /* RESTAURANT CARD */
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            alt="Restaurant"
            className="rounded-xl h-52 w-full object-cover mb-4"
          />
  
          <h2 className="text-2xl font-semibold text-gray-900">
            Spice Hub Restaurant
          </h2>

          <p className="text-gray-600 mt-2">
            Indian • Fast Food • North Indian
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => navigate("/seller/manage")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold"
            >
              Manage Restaurant
            </button>

            <button
              onClick={() => navigate("/seller/orders")}
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-xl font-semibold"
            >
              View Orders
            </button>
          </div>
        </div>
      ) : (
        /* ADD RESTAURANT BANNER */
        <div className="bg-orange-500 text-white rounded-3xl p-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <PlusCircle className="w-20 h-20 mb-6" />

          <h2 className="text-4xl font-bold mb-4">
            Add Your Restaurant
          </h2>

          <p className="text-orange-100 mb-8 text-lg">
            Start selling food online and reach thousands of hungry customers 🚀
          </p>

          <button
            onClick={() => navigate("/seller/add-restaurant")}
            className="bg-white text-orange-500 hover:bg-orange-100 px-8 py-3 rounded-xl font-bold text-lg"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default SellerPage;
