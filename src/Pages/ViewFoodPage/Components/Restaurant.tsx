import React from "react";

const Restaurant = () => {
  return (
    <div className="border border-orange-300 bg-orange-50 rounded-2xl p-6 flex gap-5 items-start sm:items-center">
      {/* RESTAURANT IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
        alt="Restaurant"
        className="w-20 h-20 rounded-full object-cover border border-orange-300"
      />
      {/* RESTAURANT DETAILS */}
      <div className="flex-1 space-y-1.5">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-3xl font-semibold text-gray-900">
            Spice Junction
          </h3>

          {/* STAR RATING */}
          <div className="flex text items-center gap-0.5">
            <span className="text-orange-500">★</span>
            <span className="text-orange-500">★</span>
            <span className="text-orange-500">★</span>
            <span className="text-orange-500">★</span>
            <span className="text-gray-300">★</span>
          </div>
        </div>

        {/* ADDRESS */}
        <p className="text-lg text-gray-600">
          📍 MP Nagar, Bhopal
        </p>

        {/* CLICK TO CALL */}
        <a
          href="tel:+919876543210"
          className="text-lg text-orange-600 font-medium hover:underline"
        >
          📞 +91 98765 43210
        </a>
      </div>
    </div>
  );
};

export default Restaurant;
