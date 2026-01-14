"use client";

import { Store, MapPin, Phone, ImageIcon } from "lucide-react";

const CreateRestaurant = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* PAGE HEADER */}
      <div className="bg-white border-b px-10 py-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Restaurant
        </h1>
        <p className="text-gray-600 mt-1">
          Add your restaurant details to start receiving orders
        </p>
      </div>

      {/* FORM */}
      <form className="px-10 py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* RESTAURANT NAME */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Restaurant Name *
            </label>
            <div className="relative">
              <Store className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Spice Hub"
                className="w-full pl-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Category *
            </label>
            <select className="w-full py-3 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="">Select category</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Fast Food</option>
              <option>Bakery</option>
            </select>
          </div>

          {/* PHONE */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="+91 9876543210"
                className="w-full pl-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* IMAGE URL */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Restaurant Image URL
            </label>
            <div className="relative">
              <ImageIcon className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="https://image-url.com"
                className="w-full pl-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div className="md:col-span-2">
            <label className="block font-semibold text-gray-700 mb-2">
              Address *
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Full restaurant address"
                className="w-full pl-10 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="md:col-span-2">
            <label className="block font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows={5}
              placeholder="Tell customers about your restaurant..."
              className="w-full border rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* ACTION BAR */}
        <div className="mt-10 flex gap-6">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 rounded-xl font-semibold"
          >
            Create Restaurant
          </button>

          <button
            type="button"
            className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-12 py-3 rounded-xl font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRestaurant;
