import React from "react";
import fb from "../../assets/fb.png";
import apple from "../../assets/apple.png";
import gg from "../../assets/gg.png";
import signAbs from "../../assets/signAbs.png";
const SignInHero = () => {
  return (
    <section className="flex flex-col">
      <div className="  bg-[url('src/assets/bgimagbw.png')] relative w-full md:w-4/5 lg:w-3/4 mx-auto rounded-xl">
        <div className="rounded-xl py-5 md:py-9 lg:py-14 px-4 md:px-9 lg:px-16 bg-grey10 flex flex-col space-y-3 w-full  bg-opacity-[0.97]">
          <div className="text-center flex flex-col space-y-2">
            <h2 className="text-col60 font-medium lg:text-5xl md:text-4xl text-3xl">
              Login
            </h2>
            <p className="text-grey75 font-light text-lg">
              Welcome back! Please log in to access your account.
            </p>
          </div>
          <form className="flex flex-col w-full py-8">
            <div className="flex flex-col space-y-3 w-full pb-5">
              <div className="flex sm:flex-row flex-col items-center justify-between w-full sm:space-x-3 space-y-4 sm:space-y-0">
                <input
                  type="text"
                  className="rounded-full w-full sm:w-1/2 px-3 bg-grey10 py-4 border border-grey15 outline-none placeholder-grey35"
                  placeholder="Enter your Email"
                />
                <div className="w-full sm:w-1/2 relative">
                  <input
                    type="text"
                    className="rounded-full w-full px-3 bg-grey10 py-4 outline-none border-grey15 border  placeholder-grey35"
                    placeholder="Enter your password"
                  />
                  <i className="fa fa-eye text-grey75 right-6 m-0   bottom-1/3 absolute"></i>
                </div>
              </div>
              <a href="#" className="text-white underline text-center">
                Forgot Password?
              </a>
            </div>
            <div className="flex flex-col space-y-4 mx-auto w-full sm:w-1/2">
              <button className="px-5 py-2 bg-col60 w-full font-lexend text-normal  text-grey10 rounded-l-full rounded-r-full">
                Login
              </button>
              <button className="px-5 py-2 bg-grey20 w-full font-lexend text-normal  text-white rounded-l-full rounded-r-full">
                Sign Up
              </button>
              <div className="flex items-center text-grey70 justify-center">
                <span className="lg:w-20 md:w-8 sm:w-14 w-10 h-0 border border-grey70"></span>
                <span className="px-5 md:text-lg sm:text-base text-sm">
                  Or continue with
                </span>
                <span className="lg:w-20 md:w-8 sm:w-14 w-10 h-0 border border-grey70"></span>
              </div>
              <div className="flex space-x-3 py-3 items-center justify-center">
                <button className="rounded-full  w-10">
                  <img src={gg} alt="google Icon" />
                </button>
                <button className="rounded-full w-10">
                  <img src={fb} alt="Facebook Icon" />
                </button>
                <button className="rounded-full w-10">
                  <img src={apple} alt="Apple Icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <img
          src={signAbs}
          alt="abstract image"
          className="absolute top-0 right-0"
        />
      </div>
    </section>
  );
};

export default SignInHero;
