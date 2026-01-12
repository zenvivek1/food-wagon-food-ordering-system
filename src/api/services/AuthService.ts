import api from "../AxiosApi";


interface Registerpayload{
    name : string,
    email : string,
    password : string
}

interface LoginPayload{
    email : string,
    password : string
}

export const registerUser = async (payload : Registerpayload) => {
  try {
    const res = await api.post("/users/", payload);
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;        
  }
};

export const loginUser = async (payload : LoginPayload ) => {
  try {
    const res = await api.post("/auth/login", payload);
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};
