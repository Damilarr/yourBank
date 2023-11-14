import React from "react";
import dotGlow from "../assets/dotglow.png";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <section className="py-16 flex flex-col absolute left-0 h-full w-full space-y-14">
      <div className="flex justify-center items-center pb-9  px-4 sm:px-10">
        <div className="flex md:flex-row flex-col md:w-full lg:w-11/12 xl:w-5/6 justify-between items-center border border-grey15 rounded-lg mx-auto bg-grey11 p-4 md:p-6 lg:p-9 relative overflow-clip">
          <div className="flex md:text-left text-center space-y-3 md:space-y-0 flex-col w-full md:w-4/5">
            <h1 className="text-white  font-medium text-2xl sm:text-3xl">
              Start your financial journey with{" "}
              <span className="text-col60">YourBank today!</span>
            </h1>
            <p className="font-light text-grey70 text-sm sm:text-base lg:text-lg">
              Ready to take control of your finances? Join YourBank now, and let
              us help you achieve your financial goals with our tailored
              solutions and exceptional customer service
            </p>
          </div>
          <div className=" md:w-1/5 w-full flex flex-col items-center pt-4 md:items-end">
            <button className="bg-col60 px-5 font-medium  w-fit py-2 rounded-l-full rounded-r-full text-grey10">
              Open Account
            </button>
          </div>
          <img src={dotGlow} alt="gloww" className="absolute top-0 left-0" />
        </div>
      </div>
      <div className="bg-grey11  left-0 w-full flex flex-col items-center px-4 sm:px-10 md:px-20 py-10 space-y-6">
        <img src={Logo} alt="logo" className="w-24" />
        <div className="flex space-x-3 text-white lg:text-lg sm:text-base text-sm ">
          <a href="" className="hover:text-col60">
            Home
          </a>
          <a href="" className="hover:text-col60">
            Careers
          </a>
          <a href="" className="hover:text-col60">
            About
          </a>
          <a href="" className="hover:text-col60">
            Security
          </a>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-center  w-full  space-x-4 py-9 border border-dashed border-grey20 border-l-0 border-r-0 text-sm md:text-lg">
          <p>
            <i className="fa fa-envelope text-col60"></i> hello@skillbridge.com
          </p>
          <p>
            <i className="fa fa-phone text-col60 py-2 sm:py-0"></i> +91 91813 23
            2309
          </p>
          <p>
            <i className="fa fa-location-dot text-col60 py-2 sm:py-0"></i>{" "}
            Somewhere in the world
          </p>
        </div>
        <div className="hidden sm:flex text-grey70  font-light justify-between items-center bg-grey10 w-full rounded-l-full rounded-r-full py-3 px-2">
          <div className="flex space-x-3 text-grey10">
            <i className="fa-brands fa-facebook bg-col60 rounded-full p-2"></i>
            <i className="fa-brands fa-twitter bg-col60 rounded-full p-2"></i>
            <i className="fa-brands fa-linkedin bg-col60 rounded-full py-2 px-[9px]"></i>
          </div>
          <p className=" text-sm md:text-base lg:text-lg">
            YourBank All Rights Reserved
          </p>
          <p className="md:px-3">Privacy Policy | Terms of service</p>
        </div>
        <div className="flex sm:hidden relative bg-grey10 h-full py-7 rounded-xl w-full border space-y-3 border-grey15 flex-col justify-center items-center text-grey75">
          <div className="flex space-x-2 text-grey10 absolute -top-4">
            <i className="fa-brands fa-facebook bg-col60 rounded-full p-2"></i>
            <i className="fa-brands fa-twitter bg-col60 rounded-full p-2"></i>
            <i className="fa-brands fa-linkedin bg-col60 rounded-full py-2 px-[9px]"></i>
          </div>
          <p className=" text-sm">YourBank All Rights Reserved</p>
          <p className="text-sm">Privacy Policy | Terms of service</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
