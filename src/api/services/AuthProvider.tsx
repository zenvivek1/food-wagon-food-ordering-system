import { useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import useTokenStorage from "../hooks/setTokenRes";
import useFindUser from "../hooks/useFindUser";
import FoodLoader from "../../Pages/Loader/FoodLoader";

export const AuthProvider = ({ children }: any) => {
  const { getAccessToken } = useTokenStorage();
  const [hasToken, setHasToken] = useState<boolean | null>(!!getAccessToken());
  
  const refreshUser = () => {
    setHasToken(!!getAccessToken());
  };

  const { user, isLoading, isLoggedIn } = useFindUser(!!hasToken);
  const isAuthReady = hasToken !== null && !isLoading;

  // useEffect(() => {
  //   setHasToken(!!getAccessToken());
  // }, []); 
  

  const value = {
    user,
    isLoading,
    isLoggedIn,
    isAuthReady,
    refreshUser
  };

  if (hasToken === null || isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white">
        <FoodLoader />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>
    {isLoading ? (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
          <FoodLoader />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>;
};

export default AuthProvider;
