import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const normalizeOrder = (data: any) => ({
  ...data,
  items: Array.isArray(data?.items) ? data.items : [],
});

const OrderCard = ({ data }: { data: any }) => {

  const order = normalizeOrder(data);
  const item = order.items[0];
  const date = order?.updated_at
    ? new Date(data.updated_at).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    : "";

  // console.log(order)

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-md transition-all group w-80 shrink-0"
    >
      <div className="relative">
        <img
          src={item[0].image_urls[0] || ""}
          alt="Food"
          className="h-54 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-black uppercase text-green-600 border border-green-100">
          Delivered
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-gray-900 text-lg">
          {item?.product_name || ""}
        </h4>
        <div className="flex justify-between items-center mt-2">
          <p className="text-orange-600 font-black text-lg">
            ₹{item?.price_at_time}
          </p>
          <p className="text-xs text-zinc-400 font-medium">
            {date}
          </p>
        </div>
        <button
          onClick={() => {
            navigate(`/product/${data?.items[0]?.product_id}`);
          }}
          className="w-full mt-4 py-2 rounded-xl bg-primary text-white text-sm font-bold hover:bg-orange-500 hover:text-white transition-colors"
        >
          Reorder
        </button>
      </div>
    </motion.div>
  );
};

export default OrderCard;
