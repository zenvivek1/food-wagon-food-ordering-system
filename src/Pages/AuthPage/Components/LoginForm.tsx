import { useEffect, useState } from "react";
import { loginUser } from "../../../api/services/AuthService";
import { loginWithGoogle } from "../../../auth/googleAuth";
import useTokenStorage from "../../../api/hooks/setTokenRes";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const LoginForm = () => {
  const { refreshUser, user } = useAuth();

  const { saveTokens } = useTokenStorage();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // stop page reload

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await loginUser(payload);
      // console.log(res);
      if (res) {
        saveTokens(res.data);
        toast.success("Login Successfully!");
        refreshUser();
      }
    } catch (error: any) {
      toast.error("Login failed! - " + error.error);
    }
  };

  useEffect(() => {
    if (!user) return;
    console.log("User available:", user);
    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="h-full flex flex-col items-center justify-center px-12">
      <h2 className="text-3xl font-bold text-orange-400">Login</h2>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block font-semibold mb-2 text-black"
          >
            Enter Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block font-semibold mb-2 text-black"
          >
            Enter Your Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Login
        </button>

        {/* OR Separator */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={async () => {
            try {
              const res = await loginWithGoogle();
              saveTokens(res.data);
              if (res) {
                saveTokens(res.data);
                toast.success("Login Successfull");
                setTimeout(() => {
                refreshUser();
                navigate("/");
                window.location.reload();
              }, 1200);
              } else {
                toast.error("Login failed");
              }
            } catch {
              toast.error("Google Authentication Failed!");
            }
          }}
          className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
