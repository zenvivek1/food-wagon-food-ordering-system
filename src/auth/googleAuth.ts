import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase";
import api from "../api/AxiosApi";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const idToken = await user.getIdToken();

    const res = await api.post("/auth/google", { token: idToken });
    return res.data;

  } catch (error) {
    console.error("Google login error:", error);
    throw error;
  }
};
