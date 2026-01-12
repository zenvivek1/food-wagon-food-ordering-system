import { useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import useTokenStorage from "../hooks/setTokenRes";
import useFindUser from "../hooks/useFindUser";

export const AuthProvider = ({ children }: any) => {
  const { getAccessToken } = useTokenStorage();
  const [hasToken, setHasToken] = useState(false);
  
  const refreshUser = () => {
    setHasToken(true);
  };

  useEffect(() => {
    setHasToken(!!getAccessToken());
  }, [hasToken]);
  
  const { user, loading, isLoggedIn } = useFindUser(hasToken);

  const value = {
    user,
    loading,
    isLoggedIn,
    refreshUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
