import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { MapPin, ShoppingBag, Edit3, User, Mail } from "lucide-react";
import OrderCard from "./Components/OrderCard";
import EditProfileModal from "./Components/EditProfile";
import { getOrders } from "../../api/services/orders/ordersApi";
import { toast } from "sonner";
import type { Order } from "../../Interfaces/Orders";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useAuth();
  const [EditProfile, setEditProfile] = useState(false)
  const [loading, setLoading] = useState(true);

    const [orders, setOrders] = useState<Order[]>([]);
    const navigate = useNavigate()

    const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch {
      toast.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      fetchOrders();
    }, []);

  return (
    <>
    <div className="min-h-screen bg-zinc-50 py-12 px-4 md:px-24">
      <div className="max-w-8xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              <button onClick={()=>setEditProfile(true)} className="absolute top-10 right-10 flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-xl text-sm font-bold hover:bg-zinc-100 transition shadow-sm">
            <Edit3 size={16} /> Edit Profile
          </button>
          {/* User Info Card */}
          <div className="bg-white rounded-3xl max-w-4xl p-8 shadow-sm border border-zinc-100 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-orange-100 border-4 border-orange-50 flex items-center justify-center text-4xl font-black text-orange-600 mb-6 shadow-inner">
              {user?.name?.[0] || "U"}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
            <div className="flex items-center gap-2 text-zinc-500 mt-2">
              <Mail size={14} />
              <span className="text-sm">{user?.email}</span>
            </div>
            
            <div className="mt-8 w-full bg-orange-50 rounded-2xl p-4 flex justify-around text-center">
              <div>
                <p className="text-xs text-orange-600 font-bold uppercase tracking-wider">Orders</p>
                <p
                title="View All Orders" 
                onClick={()=>navigate('/orders')}
                className="text-xl font-black text-orange-700 cursor-pointer">{orders?.length}</p>
              </div>
              <div className="border-r border-orange-200" />
              <div>
                <p 
                className="text-xs text-orange-600 font-bold uppercase tracking-wider">Points</p>
                <p
                title="50 Points Per Order"
                 className="text-xl font-black text-orange-700">{orders?.length*50}</p>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-zinc-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-zinc-100 rounded-2xl text-orange-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Delivery Address</h3>
                <p className="text-sm text-zinc-500">Your primary shipping location</p>
              </div>
            </div>
            
            <div className="p-6 bg-zinc-50 rounded-2xl border border-dashed border-zinc-300">
              <p className="text-zinc-800 font-medium leading-relaxed">
                Stackmentalists Ventures Pvt Ltd <br />
                <span className="text-zinc-500 text-sm">Main Road, Pune, Maharashtra - 411001</span>
              </p>
              <button onClick={()=>setEditProfile(true)} className="mt-4 text-orange-600 text-sm font-bold hover:underline">Update Address</button>
            </div>
          </div>
        </div>

        {/* Past Orders Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-900">Past Orders</h3>
          </div>



          <div className="flex gap-6 w-[90vw] overflow-x-auto lg:flex-nowrap flex-wrap justify-center lg:justify-start">
            {
              orders.map((e)=>{
                if(e.status==="confirmed"){
                  return <OrderCard data={e}/>
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
    {EditProfile && <EditProfileModal onClose={()=>setEditProfile(false)} isOpen={EditProfile} userData={user}/>}
    </>
  );
};


export default UserProfile;