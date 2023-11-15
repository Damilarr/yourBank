import React from "react";
import Navbar from "./Navbar";
import HeroImg from "../assets/Container.png";
import Abstract from "../assets/Abstract.png";
import Button from "./Button";
import UseCaseSect from "./Sects/UseCaseSect";
import Features from "./Sects/Features";
import Faq from "./Sects/Faq";
import IndividualBtn from "./IndividualBtn";
import Testimonial from "./Sects/Testimonial";
import Footer from "./Footer";

const Home = () => {
  return (
    <section className="w-full">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="flex px-2 md:px-0 flex-col md:flex-row font-lexend justify-around w-full py-8 items-start">
        <div className="py-3 flex items-center md:items-start flex-col text-white md:w-1/2 w-full space-y-3">
          <span className="px-3 py-1 text-wh99 shadow-md bg-grey15 text-xs sm:text-sm lg:text-lg rounded-l-full rounded-r-full w-fit text-center">
            No LLC Required,No Credit Check
          </span>
          <h1 className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl font-medium">
            Welcome to YourBank
          </h1>
          <h1 className="text-3xl text-center md:text-left sm:text-4xl lg:text-5xl font-medium">
            Empowering Your{" "}
            <span className="text-col60">Financial Journey</span>
          </h1>
          <p className="font-light md:text-left text-grey70 text-center text-sm sm:text-base lg:text-lg">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>
          <Button text="Open Account" />
        </div>
        <div className="md:w-1/2 relative w-full py-4 md:py-0 flex justify-center items-center">
          <img
            src={HeroImg}
            className="md:w-3/4 w-full"
            alt="Hero section image"
          />
          <img
            src={Abstract}
            alt="Abstract design"
            className="absolute top-5 -right-5 md:right-0 -z-10"
          />
        </div>
      </section>
      {/* Our products */}
      <section className="flex flex-col py-20 space-y-5">
        <div className="flex flex-col md:flex-row justify-between items-end md:space-y-0 space-y-3">
          <div className="flex flex-col md:w-1/2 w-full">
            <h1 className="font-medium text-center md:text-left text-3xl sm:text-4xl lg:text-5xl">
              Our <span className="text-col60">Products</span>
            </h1>
            <p className="text-grey70 text-center md:text-left text-light text-base">
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations
            </p>
          </div>
          <div className="flex w-fit mx-auto md:1/2 lg:w-1/3 xl:w-[29%] text-sm py-2 px-3 bg-grey11  border-2 border-grey20 rounded-l-full rounded-r-full justify-between">
            <IndividualBtn />
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-white items-center justify-around pt-8 md:space-x-5">
          <div className="flex space-y-3 w-full md:py-0 py-3 md:w-1/3 flex-col justify-between items-center">
            <i>icon</i>
            <h3 className="text-2xl">Checking Accounts</h3>
            <p className="text-grey70 text-center font-light text-lg">
              Enjoy easy and convenient access to your funds with our range of
              checking account options. Benefit from features such as online and
              mobile banking, debit cards, and free ATM access.
            </p>
          </div>
          <div className="flex space-y-3 border-t border-b py-4 md:border-t-0 md:border-b-0 md:py-0 md:border-l md:px-3 md:border-r border-grey20 w-full md:w-1/3 flex-col justify-between items-center">
            <i>icon</i>
            <h3 className="text-2xl text-center">Loan and Mortgages</h3>
            <p className="text-grey70 text-center font-light text-lg">
              Build your savings with our competitive interest rates and
              flexible savings account options. Whether you're saving for a
              specific goal or want to grow your wealth over time, we have the
              right account for you.
            </p>
          </div>
          <div className="flex space-y-3 w-full md:py-0 py-3 md:w-1/3 flex-col justify-between items-center">
            <i>icon</i>
            <h3 className="text-2xl">Savings Accounts</h3>
            <p className="text-grey70 text-center font-light text-lg">
              Build your savings with our competitive interest rates and
              flexible savings account options. Whether you're saving for a
              specific goal or want to grow your wealth over time, we have the
              right account for you.
            </p>
          </div>
        </div>
      </section>
      {/* Use Cases */}
      <UseCaseSect />
      {/* Features */}
      <Features />
      {/* FAQ */}
      <Faq />
      {/* testimony */}
      <Testimonial />
      {/* footer */}
      <Footer />
    </section>
  );
};
export default Home;
