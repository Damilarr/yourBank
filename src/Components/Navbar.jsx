import React from "react";
import Logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex border border-grey15 justify-between items-center px-4 py-3 md:py-3 shadow-md rounded-l-full rounded-r-full bg-[#1c1c1c]">
      <img src={Logo} alt="Logo" className="w-24" />
      <div className="hidden sm:flex space-x-3 text-white text-xs sm:text-sm lg:text-base justify-between items-center">
        <a
          href=""
          className="hover:bg-grey15 active:bg-grey15 transition-all rounded-l-full hover:px-5 py-3 rounded-r-full"
        >
          Home
        </a>
        <a
          href=""
          className="hover:bg-grey15 rounded-l-full active:bg-grey15 transition-all rounded-r-full hover:px-5 py-3"
        >
          Careers
        </a>
        <a
          href=""
          className="hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3"
        >
          About
        </a>
        <a
          href=""
          className="hover:bg-grey15 rounded-l-full rounded-r-full active:bg-grey15 transition-all hover:px-5 py-3"
        >
          Security
        </a>
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
