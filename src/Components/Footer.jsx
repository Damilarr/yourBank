import React from "react";
import Button from "./Button";
import dotGlow from "../assets/dotglow.png";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <section className="py-16 flex flex-col relative">
      <div className="flex justify-center items-center pb-9">
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
      <div className="bg-grey15  w-full flex flex-col items-center">
        <img src={Logo} alt="logo" className="w-14 sm:w-24" />
        <div className="flex space-x-3 text-white">
          <a href="">Home</a>
          <a href="">Careers</a>
          <a href="">About</a>
          <a href="">Security</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
