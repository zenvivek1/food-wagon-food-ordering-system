"use client";
import React, { useState, useEffect } from "react";
import { updateFood } from "../../../../api/services/admin/foodApi";
import { toast } from "sonner";
import { FOOD_CATEGORY_OPTIONS } from "../../../../options/options";

// Using the interface you provided
interface createPayload {
  name: string;
  price: number | string; // Use string for input handling, convert to number on submit
  category_id: string;
  restaurant_id: number;
  description: string;
  image_url: string;
  is_available: boolean;
}

const EditFoodModel = ({ open, onClose, item }: any) => {

  console.log("dklksslkdsldksdkskdslkdkskdlskdsldlkldsksldksldkdslk")
  const [formData, setFormData] = useState<createPayload>({
    name: "",
    price: "",
    category_id: "",
    restaurant_id: 1,
    description: "",
    image_url: "",
    is_available: true,
  });

  // Fill the form with item data when modal opens
  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        price: item.price || "",
        category_id: item.category_id || "",
        restaurant_id: item.restaurant_id || 1,
        description: item.description || "",
        image_url: item.image_url || "",
        is_available: item.is_available ?? true,
      });
    }
  }, [item]);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.warning("Food name is required");
      return false;
    }
    if (!formData.price || Number(formData.price) <= 0) {
      toast.warning("Price must be greater than 0");
      return false;
    }
    if (!formData.category_id || formData.category_id === "Select Category") {
      toast.warning("Category is required");
      return false;
    }
    if (!formData.description.trim()) {
      toast.warning("Description is required");
      return false;
    }
    if (!formData.image_url.trim()) {
      toast.warning("Image URL is required");
      return false;
    }
    try {
      new URL(formData.image_url);
    } catch {
      toast.error("Invalid image URL");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const finalData = {
      ...formData,
      price: Number(formData.price),
    };

    try {
      // Here you might have an update API instead of create
      const data = await updateFood(finalData, item.id);
      if (data) {
        toast.success("Product updated successfully!");
        onClose();
      }
    } catch (error: any) {
      toast.error("Failed to update product");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl"
      >
        <div className="flex min-h-[520px]">
          {/* LEFT IMAGE SECTION */}
          <div className="hidden lg:block w-2/5 bg-orange-100">
            <img
              src={
                formData.image_url ||
                "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              }
              alt="Food Preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="w-full lg:w-3/5 p-10 overflow-y-auto max-h-[90vh]">
            <h2 className="text-3xl font-semibold text-gray-900">
              Edit Food Item
            </h2>
            <p className="text-gray-500 mt-1 mb-8">
              Update the details of the food item below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Food Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Food Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Cheese Burger"
                  className="w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g. 199"
                  className="w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-2 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option>Select Category</option>
                  {FOOD_CATEGORY_OPTIONS.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  placeholder="Paste image URL here"
                  className="w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Food Description"
                  className="w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Restaurant ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant ID
                </label>
                <input
                  type="number"
                  name="restaurant_id"
                  value={formData.restaurant_id}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-10">
              <button
                onClick={onClose}
                className="px-6 py-3 text-sm rounded-xl border hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-8 py-3 text-sm rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition"
              >
                Update Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFoodModel;
