const AdminSettings = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-8 px-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your admin account and application preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Admin Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Admin Name"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="email"
                placeholder="Admin Email"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <button className="mt-5 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Update Profile
            </button>
          </div>

          {/* Password Settings */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>

            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="password"
                placeholder="New Password"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <button className="mt-5 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Update Password
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* App Preferences */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>

            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-gray-700">Enable Notifications</span>
                <input type="checkbox" className="w-5 h-5 accent-orange-500" />
              </label>

              <label className="flex items-center justify-between">
                <span className="text-gray-700">Maintenance Mode</span>
                <input type="checkbox" className="w-5 h-5 accent-orange-500" />
              </label>
            </div>
          </div>

          {/* Restaurant Defaults */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Restaurant Defaults
            </h2>

            <select className="border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-orange-400 outline-none">
              <option>Default Currency</option>
              <option>INR (₹)</option>
              <option>USD ($)</option>
            </select>

            <button className="mt-5 w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
