import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handelLogout = async () => {
    try {
      await logOut();
      Swal.fire({
        title: "Sussess",
        text: `${user.displayName} You Are successfully Log out`,
        icon: "success",
        confirmButtonText: "Cool",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-sm  px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-16 " src={logo} alt="" />
          <span className=" hidden md:block font-lato font-bold text-4xl text-[#ff3811]">
            Hat Bazar
          </span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <Link to={"/"} className="font-lato font-semibold text-[15px]">
              Home
            </Link>
          </li>

          {!user && (
            <li>
              <Link
                to={"/log-in"}
                className="bg-main text-white font-lato font-semibold text-[15px] "
              >
                Login
              </Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title="">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/products"} className="justify-between">
                  All Product
                </Link>
              </li>
              <li>
                <div>My Posted Jobs</div>
              </li>
              <li>
                <div>My Bids</div>
              </li>
              <li>
                <div>Bid Requests</div>
              </li>
              <li className="mt-2">
                <button
                  onClick={handelLogout}
                  className="bg-main block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
