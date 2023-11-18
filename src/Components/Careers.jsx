import React from "react";
import HeroImage from "../assets/CareerHero.png";
import glow2 from "../assets/glowB.png";
import Values from "./Sects/Values";
import Benefits from "./Sects/Benefits";
import Openings from "./Sects/Openings";
import Faq from "./Sects/Faq";
import Footer from "./Footer";

export const HeroTop = ({ small, ha, hb, paragraph, imgg }) => {
  return (
    <>
      <div className="bg-grey15 hidden overflow-hidden p-3 sm:p-5 md:p-7 lg:p-10 rounded-xl lg:flex lg:flex-row flex-col-reverse lg:justify-end  relative">
        <div className="z-20 lg:flex flex-col hidden bg-grey10 lg:w-1/2 lg:rounded-br-[3.5rem]  lg:bottom-auto bottom-10  right-auto left-auto w-11/12  lg:left-10 lg:rounded-bl-md lg:rounded-tl-md px-9 lg:py-3 xl:py-5 h-1/2 lg:h-fit  absolute">
          <small className="">{small}</small>
          <h2 className="text-center  lg:text-left text-3xl sm:text-4xl lg:text-5xl">
            {ha} <span className="text-col60">{hb}</span>
          </h2>
          <p className="text-center   lg:text-left font-light text-grey70 py-4 text-lg">
            {paragraph}
          </p>
        </div>
        <img
          src={imgg}
          alt="Career image"
          className="h-[30%] w-[55%] z-10 hidden lg:block"
        />
        <img src={glow2} alt="glow" className="absolute top-0 right-0 " />
        {/* -------------------------------------- */}
      </div>
      <div className="bg-grey15 lg:hidden overflow-hidden p-4 md:p-7 flex flex-col h-[85%] sm:h-[50%] rounded-xl relative">
        <img
          src={imgg}
          alt="hero image"
          className="sm:shadow-transparent shadow-grey10 shadow-lg z-10"
        />
        <div className="flex flex-col left-0 right-0 bottom-0 p-4 z-20 bg-grey10 absolute">
          <h2 className="text-center text-3xl sm:text-4xl">
            {ha} <span className="text-col60">{hb}</span>
          </h2>
          <p className="text-center lg:text-left font-light text-grey70 py-4 text-sm lg:text-lg">
            {paragraph}
          </p>
        </div>
        <img src={glow2} alt="glow" className="absolute top-0 right-0 " />
      </div>
    </>
  );
};
const Careers = () => {
  return (
    <section className="w-full py-10 h-screen">
      <HeroTop
        imgg={HeroImage}
        ha="Welcome to"
        hb="Your bank"
        paragraph="Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."
      />
      <Values />
      <Benefits />
      <Openings />
      <Faq />
      <Footer />
    </section>
  );
};

export default Careers;
