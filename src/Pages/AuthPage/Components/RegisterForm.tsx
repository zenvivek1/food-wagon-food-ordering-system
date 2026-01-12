import { useState } from "react";
import { loginWithGoogle } from "../../../auth/googleAuth";
import api from "../../../api/AxiosApi";
import { registerUser } from "../../../api/services/AuthService";
import { toast } from "sonner";
import useTokenStorage from "../../../api/hooks/setTokenRes";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const RegisterForm = ({ setIsLogin }: any) => {
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  const { saveTokens } = useTokenStorage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //helper function
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email");
      return false;
    }

    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (!formData.confirmPassword) {
      toast.error("Confirm password is required");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await registerUser(payload);
      if (res) {
        toast.success("SignUp Successfully! You can Login Now!");
      }
    } catch (error: any) {
      toast.error(error?.error || "Registration failed");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center px-12">
      <h2 className="text-3xl font-bold text-orange-500">Register</h2>

      <form onSubmit={handleSubmit} className="w-full mt-8 space-y-5">
        <label htmlFor="name" className="font-semibold block text-black">
          Enter Your Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <label htmlFor="email" className="font-semibold block text-black">
          Enter Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <label htmlFor="password" className="font-semibold block text-black">
          Enter Your Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <label
          htmlFor="confirmPassword"
          className="font-semibold block text-black"
        >
          Confirm Your Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Create Account
        </button>

        {/* OR Separator */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Signup */}
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
          Sign Up with Google
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
