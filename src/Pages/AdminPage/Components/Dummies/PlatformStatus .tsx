const PlatformStatus = () => {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Platform Status
      </h2>

      <div className="space-y-4">
        {/* Orders */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Order Processing</span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
            Operational
          </span>
        </div>

        {/* Payments */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Payments</span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
            Stable
          </span>
        </div>

        {/* Restaurants */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Restaurant Onboarding</span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
            3 Pending
          </span>
        </div>

        {/* Support */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Support Tickets</span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
            2 Open
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlatformStatus;
