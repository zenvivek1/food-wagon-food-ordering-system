const FoodDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT: FOOD IMAGE */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Food"
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT: FOOD DETAILS */}
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-gray-900">
            Grilled Chicken Bowl
          </h1>

          <p className="text-gray-600 leading-relaxed">
            A healthy and delicious grilled chicken bowl served with fresh
            veggies, greens, and house-made sauce. Perfect for lunch or dinner.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-orange-500">₹249</span>
            <span className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full">
              In Stock
            </span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 pt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition">
              Order Now
            </button>

            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-xl font-semibold transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* RESTAURANT DETAILS CARD */}
      <div className="mt-14 bg-white border rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Spice Junction Restaurant
          </h2>
          <p className="text-gray-600 mt-1">
            North Indian • Fast Food • Chinese
          </p>
          <p className="text-sm text-gray-500 mt-2">
            📍 MP Nagar, Bhopal
          </p>
        </div>

        <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-xl">
          <span className="text-green-700 font-bold text-lg">4.5</span>
          <span className="text-green-700 text-sm">⭐ Rating</span>
        </div>
      </div>

      {/* CUSTOMER REVIEWS */}
      <div className="mt-14">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Customer Reviews
        </h2>

        <div className="space-y-5">
          {/* REVIEW CARD */}
          <div className="border rounded-xl p-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Aman Verma</h3>
              <span className="text-sm text-green-600">⭐⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600">
              Amazing taste and very fresh ingredients. Portion size was
              perfect. Will order again!
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">Neha Sharma</h3>
              <span className="text-sm text-green-600">⭐⭐⭐⭐</span>
            </div>
            <p className="text-gray-600">
              Good food but delivery took a little longer. Taste was worth it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
