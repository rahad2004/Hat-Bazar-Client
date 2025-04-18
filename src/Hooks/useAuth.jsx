import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContex);
};

export default useAuth;
