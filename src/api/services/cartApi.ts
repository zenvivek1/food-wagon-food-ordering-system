import api from "../AxiosApi";

export const addToCart = async (
  product_id: number,
  quantity: number = 1
) => {
  const res = await api.post("/cart/items", {
    product_id,
    quantity,
  });
  return res.data;
};