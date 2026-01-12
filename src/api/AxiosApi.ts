import axios from "axios";
import useTokenStorage from "./hooks/setTokenRes";

const { getAccessToken } = useTokenStorage();

const api = axios.create({
  baseURL:
    "https://noncommunally-semicontinuous-clementine.ngrok-free.dev/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
