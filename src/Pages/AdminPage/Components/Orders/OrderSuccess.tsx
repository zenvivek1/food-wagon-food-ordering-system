"use client";

import { CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Products from "../../../../Components/Products";
import { useEffect, useState } from "react";
import api from "../../../../api/AxiosApi";
import { toast } from "sonner";

const OrderSuccess = () => {

  const [TrackLink, setTrackLink] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    const deliveryTracker = async () => {
      try {
        const res = await api.get(`/delivery/${id}/status`)
        if (res) {
          setTrackLink(res.data.data.tracking_url)
        }
      } catch (err) {
        toast.error("Error to Track!")
      }
    }
    deliveryTracker()
  }, [])


  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-[70vh] flex gap-10 items-center justify-center px-4">
        <div className="shadow-2xl flex rounded-2xl p-10">

          <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center">

            {/* SUCCESS ICON */}
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Order Placed Successfully 🎉
            </h1>

            {/* MESSAGE */}
            <p className="text-gray-600 mb-6">
              Thank you for your order! Your delicious food is being prepared
              and will reach you soon 🍔🍕
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate("/")}
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
              >
                Back to Home
              </button>

              <button
                onClick={() => navigate("/orders")}
                className="border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-xl font-semibold"
              >
                View My Orders
              </button>
            </div>
          </div>

          {
            TrackLink &&
            <div className="flex flex-col justify-center items-center gap-6">
              <a href={TrackLink} className="text-4xl" target="blank">
                <img src="/DeliveryTruck.svg" alt="" className="h-50" />
              </a>
              <h2 className="text-4xl text-black font-semibold w-100 text-center">Click On Truck To Track Your Order..</h2>
            </div>
          }
        </div>
      </div>
      <Products label="Order More" />
    </>
  );
};

export default OrderSuccess;
