import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  X,
  LogIn,
  User2Icon,
  ClipboardEditIcon,
  HelpCircle,
} from "lucide-react";
import useTokenStorage from "../api/hooks/setTokenRes";
import { useAuth } from "../Context/AuthContext";
import { toast } from "sonner";


const Sidebar = ({ open, setOpen }: any) => {

  const { clearTokens } = useTokenStorage();
  const { user, isLoggedIn, loading,refreshUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // window.location.reload()
    setOpen(false)
    navigate("/");
    clearTokens();
    refreshUser();
    toast.success("Logout Successfully!")
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-200 transition-opacity duration-300
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed z-200 top-0 left-0 h-full w-74 lg:w-84 bg-white
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          title="Close Sidebar"
          className="absolute w-4 h-4 z-200 text-black right-5 top-6 cursor-pointer"
        >
          <X />
        </button>
        {/* User Info */}
        <div className={`px-6 py-8 border-b ${isLoggedIn && "border-b"}`}>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-orange-600">
                {user?.name[0]}
              </div>
              <div>
                <p className="font-semibold text-md">{user.name}</p>
                <p className="text-sm text-gray-500  text-md">{user.email}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-xl font-bold text-orange-600">
                <User2Icon />
              </div>
              <div>
                <p className="font-semibold text-md">Hello, Sign In</p>
                <p className="text-sm text-gray-500  text-md">FoodWagon</p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 text-xl py-6 space-y-4">
          <SidebarLink
            to="/"
            icon={<Home size={18} />}
            label="Home"
            setOpen={setOpen}
          />

          {isLoggedIn && (
            <>
              <SidebarLink
                to="/profile"
                icon={<User size={18} />}
                label="Profile"
                setOpen={setOpen}
              />
              <SidebarLink
                to="/orders"
                icon={<Package size={18} />}
                label="Orders"
                setOpen={setOpen}
              />
              <SidebarLink
                to="/favourites"
                icon={<Heart size={18} />}
                label="Favourites"
                setOpen={setOpen}
              />
              <SidebarLink
                to="/addresses"
                icon={<MapPin size={18} />}
                label="Addresses"
                setOpen={setOpen}
              />
              <SidebarLink
                to="/settings"
                icon={<Settings size={18} />}
                label="Settings"
                setOpen={setOpen}
              />
            </>
          )}
          <SidebarLink
            to="/termstouse"
            icon={<ClipboardEditIcon size={18} />}
            label="Terms To Use"
            setOpen={setOpen}
          />
          <SidebarLink
            to="/faqs"
            icon={<HelpCircle size={18} />}
            label="FAQs"
            setOpen={setOpen}
          />
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-4 py-2 rounded-lg"
            >
              <LogOut size={18} />
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/auth"), setOpen(false);
              }}
              className="flex items-center gap-3 text-red-500 hover:bg-red-50 w-full px-4 py-2 rounded-lg"
            >
              <LogIn size={18} />
              Sign-In
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ to, icon, label, setOpen }: any) => (
  <NavLink
    to={to}
    onClick={() => setOpen(false)}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium transition
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

export default Sidebar;
