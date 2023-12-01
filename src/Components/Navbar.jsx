import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation("/");
  let [showing, setShowing] = useState(true);

  return (
    <nav className="flex border relative border-grey15 justify-between items-center px-4 py-3 md:py-3 shadow-md rounded-l-full rounded-r-full bg-[#1c1c1c]">
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
          className={`hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3 ${
            pathname === "/about" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          About
        </Link>
        <Link
          to={"/security"}
          className={`hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3 ${
            pathname === "/security" ? "bg-grey15 px-5" : "bg-transparent"
          }`}
        >
          Security
        </Link>
      </div>
      <div className="hidden sm:flex font-lexend space-x-2 justify-between text-xs sm:text-sm lg:text-base items-center">
        <button className="px-2 py-3 bg-transparent border-0">Sign Up</button>
        <Link
          to={"/login"}
          className="px-5 py-2 bg-col60 w-fit font-lexend text-normal  text-grey11 rounded-l-full rounded-r-full"
        >
          Login
        </Link>
      </div>
      <button
        className="block sm:hidden text-lg"
        onClick={() => setShowing(true)}
      >
        <i class="fa-solid fa-bars-staggered text-col60"></i>
      </button>
      <div
        class={`flex-col z-50 justify-center ${
          showing ? "opacity-100" : "hidden opacity-0"
        } w-screen left-0 duration-[3000ms] flex top-0 transition-all  h-screen fixed bg-black`}
        id="mobileNav"
      >
        <button
          class="bg-yelloww px-3 md:hidden py-1 w-fit fixed top-3 left-3"
          onClick={() => setShowing(false)}
        >
          <i class="fa fa-times text-lg text-white"></i>
        </button>
        <ul
          class="flex flex-col space-y-5 justify-center items-center text-col60 "
          id="ull"
          onClick={() => setShowing(false)}
        >
          <li href="/" class="hover:text-white text-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li href="menu" class="hover:text-white  text-lg">
            <Link to={"/careers"}>Careers</Link>
          </li>
          <li href="blog" class="hover:text-white  text-lg">
            <Link to={"/about"}>About</Link>
          </li>
          <li href="page" class="hover:text-white  text-lg">
            <Link to={"/security"}>Security</Link>
          </li>
          <button className="px-5 py-2 bg-grey11 w-fit font-lexend text-normal  text-white rounded-l-full rounded-r-full">
            Sign Up
          </button>
          <Link
            className="px-6 py-2 bg-col60 w-fit font-lexend text-normal  text-grey11 rounded-l-full rounded-r-full"
            to={"/login"}
          >
            Login
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
