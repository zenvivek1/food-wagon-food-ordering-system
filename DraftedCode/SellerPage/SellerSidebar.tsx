import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  Package,
  Settings,
  LogOut,
  X,
  Home,
  UtensilsCrossed,
} from "lucide-react";
import useTokenStorage from "../../src/api/hooks/setTokenRes";
import { useAuth } from "../../src/Context/AuthContext";

const { clearTokens } = useTokenStorage();

const SellerSidebar = ({ open, setOpen }: any) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-80 bg-white
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-6 text-gray-600"
        >
          <X />
        </button>

        {/* Seller Info */}
        <div className="px-6 py-8 border-b">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-orange-600">
              {user?.name?.[0] || "S"}
            </div>
            <div>
              <p className="font-semibold">{user?.name || "Seller"}</p>
              <p className="text-sm text-gray-500">Restaurant Partner</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-2">
          <SellerSidebarLink
            to="/seller/dashboard"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            setOpen={setOpen}
          />

          <SellerSidebarLink
            to="/seller/restaurant"
            icon={<Store size={18} />}
            label="My Restaurant"
            setOpen={setOpen}
          />

          <SellerSidebarLink
            to="/seller/products"
            icon={<UtensilsCrossed size={18} />}
            label="Menu / Products"
            setOpen={setOpen}
          />

          <SellerSidebarLink
            to="/seller/orders"
            icon={<Package size={18} />}
            label="Orders"
            setOpen={setOpen}
          />

          <SellerSidebarLink
            to="/seller/settings"
            icon={<Settings size={18} />}
            label="Settings"
            setOpen={setOpen}
          />

          <SellerSidebarLink
            to="/"
            icon={<Home size={18} />}
            label="Home"
            setOpen={setOpen}
          />
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t">
          <button
            onClick={() => {
              clearTokens();
              navigate("/auth");
              window.location.reload();
            }}
            className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-4 py-3 rounded-lg"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

const SellerSidebarLink = ({ to, icon, label, setOpen }: any) => (
  <NavLink
    to={to}
    onClick={() => setOpen(false)}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition
      ${
        isActive
          ? "bg-orange-100 text-orange-600"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    {icon}
    {label}
  </NavLink>
);

export default SellerSidebar;
