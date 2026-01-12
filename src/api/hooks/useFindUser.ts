import { useEffect, useState } from "react";
import api from "../AxiosApi";

const useFindUser = (hasToken: boolean) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasToken) {
      setUser(null);
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await api.get("/users/me");
        if(res?.data?.data){
          setUser(res.data.data);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [hasToken]);

  return { user, loading, isLoggedIn:!!user };
};

export default useFindUser;