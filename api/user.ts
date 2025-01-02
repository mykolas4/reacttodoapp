import axios from "axios";

type userCredentials = {
  email: string;
  password: string;
};

export const loginUser = async (userData: userCredentials) => {
  const response = await axios.post(`${process.env.BASE_URL}/login`, userData);
  return response;
};
