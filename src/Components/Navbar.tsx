import { Menu, ShoppingCart } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useAppSelector } from "../redux/hooks";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ setOpenSidebar, setOpenAdminSidebar }: any) => {
  const location = useLocation();
  const path = location.pathname;
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const cartTotalItems = useAppSelector((s) => s.cartTotalItems);

  const openSidebarHandler = () => {
    if (!isLoggedIn) {
      return setOpenSidebar(true);
    }
    user.role === "admin" ? setOpenAdminSidebar(true) : setOpenSidebar(true);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="lg:hidden flex flex-col gap-3 px-4 py-3">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <button onClick={openSidebarHandler}>
            <Menu />
          </button>

          <div className="text-xl font-extrabold">
            <span className="text-red-500">food</span>
            <span className="text-orange-400">wagon</span>
          </div>

          {!isLoggedIn && (
            <button
              onClick={() => navigate("/auth")}
              className="flex items-center gap-1 px-4 py-1 rounded-full
              font-semibold text-orange-500 bg-orange-50 shadow"
            >
              <i className="ri-user-fill"></i>
            </button>
          )}
        </div>

        {/* Search */}
        {path === "/" && (
          <div className="flex items-center w-full">
            <i className="ri-search-line text-orange-500 text-xl mr-3"></i>
            <input
              className="w-full border border-zinc-300 px-3 py-2 rounded-lg
              focus:outline-none focus:border-orange-400"
              placeholder="Search Any Food.."
              type="text"
            />
          </div>
        )}
      </div>

      <div className="hidden lg:flex min-h-[5vh] w-full items-center justify-around py-5">
        <div className="flex items-center justify-between w-full px-12">
          <button onClick={openSidebarHandler} className="cursor-pointer">
            <Menu />
          </button>

          {path === "/" && (
            <div className="text-center">
              <span className="font-bold">
                Deliver to :
                <i className="ri-map-pin-2-fill text-orange-500 ml-1"></i>
              </span>
              <span className="ml-3">Current Location</span>
              <span className="font-bold ml-1">
                M.P Nagar Bhopal Ward No.16
              </span>
            </div>
          )}

          {path === "/" && (
            <div className="flex items-center px-4">
              <i className="ri-search-line text-orange-500 text-2xl mr-3 font-bold"></i>

              <input
                className="w-sm border border-zinc-800 px-2 py-1 rounded
                focus:border-zinc-900"
                placeholder="Search Any Food.."
                type="text"
              />

              {!isLoggedIn && (
                <button
                  onClick={() => navigate("/auth")}
                  className="ml-6 flex items-center gap-1 px-5 py-2
                  rounded-full font-semibold text-orange-500 bg-orange-50
                  shadow-md shadow-orange-200 transition-all
                  hover:bg-orange-100 hover:scale-105"
                >
                  <i className="ri-user-fill text-orange-400"></i>
                  Login
                </button>
              )}
            </div>
          )}

          <div className="flex gap-10">
            {isLoggedIn && user.role==="user" && (
              <button
                title="Your Cart"
                onClick={() => navigate("/cart")}
                className="flex items-center gap-1 px-4 py-1 rounded-full
              font-semibold text-orange-500 bg-orange-50 shadow cursor-pointer"
              >
                  <div className="relative p-1">
                    <ShoppingCart />
                    <AnimatePresence>
                      <motion.p
                        key={cartTotalItems}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bg-primary text-white px-2 border-1 -right-6 top-4 rounded-full"
                      >
                        {cartTotalItems || 0}
                      </motion.p>
                    </AnimatePresence>
                  </div>
              </button>
            )}
            <div>
              <span className="text-xl text-red-500 font-extrabold">food</span>
              <span className="text-xl text-orange-400 font-extrabold">
                wagon
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
