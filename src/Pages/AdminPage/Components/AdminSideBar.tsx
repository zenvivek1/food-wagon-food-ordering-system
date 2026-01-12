import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Store,
  Package,
  Users,
  Settings,
  LogOut,
  X,
  Home,
  Proportions,
} from "lucide-react";
import { useAuth } from "../../../Context/AuthContext";
import useTokenStorage from "../../../api/hooks/setTokenRes";

const { clearTokens } = useTokenStorage();

const AdminSidebar = ({ open, setOpen }: any) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed z-200 top-0 left-0 h-full w-80 bg-white
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-6 text-gray-700"
        >
          <X />
        </button>

        {/* Admin Info */}
        <div className="px-6 py-8 border-b">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-orange-600">
              {user?.name?.[0] || "A"}
            </div>
            <div>
              <p className="font-semibold">{user?.name || "Admin"}</p>
              <p className="text-sm text-gray-500">Administrator</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-3">
          <AdminSidebarLink
            to="/admin/dashboard"
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            setOpen={setOpen}
          />

          <AdminSidebarLink
            to="/admin/restaurants"
            icon={<Store size={18} />}
            label="Add / Manage Restaurants"
            setOpen={setOpen}
          />

          <AdminSidebarLink
            to="/admin/products"
            icon={<Proportions size={18} />}
            label="Products"
            setOpen={setOpen}
          />
          <AdminSidebarLink
            to="/admin/orders"
            icon={<Package size={18} />}
            label="Orders"
            setOpen={setOpen}
          />

          <AdminSidebarLink
            to="/admin/users"
            icon={<Users size={18} />}
            label="Users"
            setOpen={setOpen}
          />

          <AdminSidebarLink
            to="/admin/settings"
            icon={<Settings size={18} />}
            label="Settings"
            setOpen={setOpen}
          />
          <AdminSidebarLink
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
              setTimeout(() => {
                navigate("/auth");
                window.location.reload();
              }, 500);
            }}
            className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-4 py-2 rounded-lg"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

const AdminSidebarLink = ({ to, icon, label, setOpen }: any) => (
  <NavLink
    to={to}
    onClick={() => setOpen(false)}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition
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

export default AdminSidebar;
