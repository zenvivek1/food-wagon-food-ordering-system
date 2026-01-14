import { useEffect, useState } from "react";
import api from "../AxiosApi";

const useFindUser = (hasToken: boolean) => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (!hasToken) {
      setUser(null);
      setisLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await api.get("/users/me");
        setUser(res?.data?.data ?? null);
      } catch {
        setUser(null);
      } finally {
        setisLoading(false);
      }
    };

    fetchUser();
  }, [hasToken]);

  return { user, isLoading, isLoggedIn: !!user };
};

export default useFindUser;