// api/services/restaurantsApi.ts

import api from "../../AxiosApi";

/**
 * Get all restaurants
 */
export const getAllRestaurants = async () => {
  try {
    const res = await api.get("/restaurants");
    return res.data.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

/**
 * Get restaurant by ID
 */
export const getOneRestaurant = async (id: Number) => {
  try {
    const res = await api.get(`/restaurants/${id}`);
    return res.data.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

/**
 * Create restaurant (Admin)
 */
export const createRestaurant = async (data: {
  name: string;
  description: string;
  is_active: boolean;
  rating: number;
}) => {
  try {
    const res = await api.post("/restaurants", data);
    return res.data.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

/**
 * Update restaurant (Admin)
 */
export const updateRestaurant = async (
  id: Number,
  data: {
    name?: string;
    description?: string;
    is_active?: boolean;
    rating?: number;
  }
) => {
  try {
    const res = await api.put(`/restaurants/${id}`, data);
    return res.data.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};
