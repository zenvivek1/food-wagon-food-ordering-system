import { createContext, useContext } from "react";

const AuthContext = createContext<any>(null);

//custom useAuth hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

export default AuthContext;
