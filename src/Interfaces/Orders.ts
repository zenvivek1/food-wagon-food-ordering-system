interface OrderItem {
  product_name: string;
  quantity: number;
  price_at_time: number;
  image_urls?: string[];
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