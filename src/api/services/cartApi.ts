// api/services/cartApi.ts
import api from "../AxiosApi";

// Add to cart
export const addToCart = async (
  product_id: number,
  quantity: number = 1
) => {
  try {
    const res = await api.post("/cart/items", {
      product_id,
      quantity,
    });
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// Get cart
export const getCart = async () => {
  try {
    const res = await api.get("/cart/");
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// Update quantity
export const updateCartItemQty = async (
  productId: number,
  quantity: number
) => {
  try {
    const res = await api.patch(`/cart/items/${productId}`, {
      quantity,
    });
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// Remove item
export const removeCartItem = async (productId: number) => {
  try {
    const res = await api.delete(`/cart/items/${productId}`);
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// Clear cart
export const clearCartItems = async () => {
  try {
    const res = await api.delete("/cart/");
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

// Checkout
export const checkoutCart = async () => {
  try {
    const res = await api.post("/orders/checkout");
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};
