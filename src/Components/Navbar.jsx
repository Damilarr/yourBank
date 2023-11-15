import React from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex border border-grey15 justify-between items-center px-4 py-3 md:py-3 shadow-md rounded-l-full rounded-r-full bg-[#1c1c1c]">
      <img src={Logo} alt="Logo" className="w-24" />
      <div className="hidden sm:flex space-x-3 text-white text-xs sm:text-sm lg:text-base justify-between items-center">
        <Link
          to={"/"}
          className={`hover:bg-grey15 transition-all rounded-l-full hover:px-5 py-3 rounded-r-full ${
            pathname === "/" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          Home
        </Link>
        <Link
          to={"/careers"}
          className={`hover:bg-grey15 rounded-l-full  transition-all rounded-r-full hover:px-5 py-3 ${
            pathname === "/careers" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          Careers
        </Link>
        <Link
          to={"/about"}
          className="hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3"
        >
          About
        </Link>
        <Link
          to={"/security"}
          className="hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3"
        >
          Security
        </Link>
      </div>
      <div className="hidden sm:flex font-lexend space-x-2 justify-between text-xs sm:text-sm lg:text-base items-center">
        <button className="px-2 py-3 bg-transparent border-0">Sign Up</button>
        <Button text="Login" />
      </div>
      <button className="block sm:hidden text-lg">
        <i class="fa-solid fa-bars-staggered text-col60"></i>
      </button>
    </nav>
  );
};

export default Navbar;
