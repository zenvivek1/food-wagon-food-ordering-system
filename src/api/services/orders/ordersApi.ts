import api from "../../AxiosApi";


export interface OrderItem {
  product_name: string;
  quantity: number;
  price_at_time: number;
  product_image?: string;
}

export interface Order {
  id: number;
  status: string;
  payment_status: string;
  total_amount: number;
  created_at: string;
  uber_tracking_url?: string;
  items: OrderItem[];
}


// GET all orders
export const getOrders = async (): Promise<Order[]> => {
  const res = await api.get("/orders/");
  return res.data.data || [];
};

// CANCEL order
export const cancelOrderById = async (orderId: number): Promise<void> => {
  await api.post(`/orders/${orderId}/cancel`);
};
