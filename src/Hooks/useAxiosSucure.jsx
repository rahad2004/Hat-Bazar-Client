import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "./useAuth";

// Secure Axios instance
const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

AxiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { logout } = useAuth();

    if (error.response?.status === 401 || error.response?.status === 403) {
      await logout();
      Swal.fire("Unauthorized", "You have been logged out.", "error");
      // Optional: Redirect
    }

    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {

    
  return AxiosSecure;
};

export default useAxiosSecure;
