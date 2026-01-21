import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { UpdateUserProfile } from "../../../api/users/userProfileApi";
import { STATE_OPTIONS } from "../../../options/options";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: any;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  userData,
}) => {
  const [ProfileData, setProfileData] = useState({
    id: userData.id || "",
    name: "",
    phone_number: "",
    email: "",
  });

  const [AddressData, setAddressData] = useState({
    street: "",
    city: "",
    state: "",
    postal_code: "",
  });

  useEffect(() => {
    if (userData) {
      setProfileData({
        id: userData.id || "",
        name: userData.name || "",
        phone_number: userData.phone_number || "",
        email: userData.email || "",
      });
      setAddressData({
        street: userData.default_address?.street || "",
        city: userData.default_address?.city || "",
        state: userData.default_address?.state || "",
        postal_code: userData.default_address?.postal_code || "",
      });
    }
  }, [userData]);

  const validateForm = () => {
    if (!ProfileData.name.trim()) return "Name is required";
    if (ProfileData.phone_number.length < 10)
      return "Enter a valid 10-digit phone number";
    if (!AddressData.street.trim()) return "Street address is required";
    if (!AddressData.city.trim()) return "City is required";
    if (AddressData.postal_code.length < 5) return "Enter a valid postal code";
    return null;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // 1. Check Validations
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      await UpdateUserProfile(ProfileData, AddressData);
      toast.success("Profile updated successfully!");
      onClose();
    } catch (err) {
      toast.error("Failed to update profile");
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop matching your current blur style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Edit Profile</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="space-y-8"
          >
            {/* SECTION 1: Personal Details */}
            <div className="space-y-4">
              <h3 className="text-orange-500 font-bold text-sm uppercase tracking-wider border-b border-orange-100 pb-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold mb-1 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-800 rounded-lg p-3 outline-none focus:border-orange-500 transition-colors"
                    value={ProfileData.name}
                    onChange={(e) =>
                      setProfileData({ ...ProfileData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-2 border-gray-800 rounded-lg p-3 outline-none"
                    value={ProfileData.email}
                    onChange={(e) =>
                      setProfileData({ ...ProfileData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-800 rounded-lg p-3 outline-none focus:border-orange-500"
                    value={ProfileData.phone_number}
                    maxLength={10}
                    onChange={(e) =>
                      setProfileData({
                        ...ProfileData,
                        phone_number: e.target.value,
                      })
                    }
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: Address Details */}
            <div className="space-y-4">
              <h3 className="text-orange-500 font-bold text-sm uppercase tracking-wider border-b border-orange-100 pb-2">
                Delivery Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold mb-1 block">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-800 rounded-lg p-3 outline-none focus:border-orange-500"
                    value={AddressData.street}
                    onChange={(e) =>
                      setAddressData({ ...AddressData, street: e.target.value })
                    }
                    placeholder="Enter Street Address"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-800 rounded-lg p-3 outline-none focus:border-orange-500"
                    value={AddressData.city}
                    onChange={(e) =>
                      setAddressData({ ...AddressData, city: e.target.value })
                    }
                    placeholder="Enter City"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-800 rounded-lg p-3 outline-none focus:border-orange-500"
                    value={AddressData.postal_code}
                    onChange={(e) =>
                      setAddressData({
                        ...AddressData,
                        postal_code: e.target.value,
                      })
                    }
                    placeholder="Enter Postal Code"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-1 block">
                    State
                  </label>
                  <select
                    className="w-full border-2 border-gray-800 rounded-lg p-3 outline-none focus:border-orange-500 bg-white"
                    value={AddressData.state}
                    onChange={(e) =>
                      setAddressData({ ...AddressData, state: e.target.value })
                    }
                  >
                    <option value="">Select State</option>

                    {STATE_OPTIONS.map((state) =>
                      <option key={state} value={state}>
                        {state}
                      </option>
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-orange-200 transition-all active:scale-95"
              >
                Update Profile
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors text-center"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EditProfileModal;
