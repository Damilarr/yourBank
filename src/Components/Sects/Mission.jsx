import React from "react";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Abs from "../../assets/Abs3.png";

const Mission = () => {
  return (
    <section className="flex flex-col space-y-5 py-10">
      <div className="flex flex-col space-y-3">
        <h1 className="headerr text-col60">Mission and Vision</h1>
        <p className="text-grey70 headerr-sub">
          We envision being a leading force in the industry, driven by
          innovation, integrity, and inclusivity, creating a brighter financial
          future for individuals and businesses while maintaining a strong
          commitment to customer satisfaction and community development
        </p>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="flex flex-col md:flex-row  relative">
          <div className="p-5 pb-0 sm:p-10 sm:pb-0 w-full md:w-1/2 flex justify-center items-center bg-grey11 rounded-t-[2.8rem] relative">
            <img src={Img1} alt="mission img" className="z-10" />
            <img src={Abs} alt="abs" className="absolute -top-5 left-0" />
          </div>
          <div className="flex w-full md:w-1/2 justify-center  flex-col">
            <div className="w-full px-6 border-t md:border-t-0 pt-6 md:pt-0 md:border-l border-col60">
              <h2 className="text-white md:text-left text-center  pb-2 font-medium sm:text-3xl text-2xl md:text-4xl lg:text-5xl">
                Mission
              </h2>
              <p className="lg:text-lg md:text-left text-center md:text-base text-sm font-light text-grey70">
                At YourBank, our mission is to empower our customers to achieve
                financial success. We are dedicated to delivering innovative
                banking solutions that cater to their unique needs. Through
                personalized services, expert guidance, and cutting-edge
                technology, we aim to build strong, lasting relationships with
                our customers. Our mission is to be their trusted partner,
                helping them navigate their financial journey and realize their
                dreams.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative md:flex-row-reverse">
          <div className="p-5 pb-0 sm:p-10 sm:pb-0  w-full md:w-1/2 flex justify-center items-center bg-grey11 rounded-t-[2.8rem] relative">
            <img src={Img2} alt="mission img" className="z-10" />
            <img src={Abs} alt="abs" className="absolute -top-5 left-0" />
          </div>
          <div className="flex w-full md:w-1/2 justify-center  flex-col">
            <div className="w-full px-6 border-t md:border-t-0 pt-6 md:pt-0 md:border-r border-col60">
              <h2 className="text-white md:text-left text-center pb-2 font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Vision
              </h2>
              <p className="lg:text-lg md:text-left text-center md:text-base text-sm  font-light text-grey70">
                Our vision at YourBank is to redefine banking by creating a
                seamless and personalized experience for our customers. We
                envision a future where banking is accessible, transparent, and
                tailored to individual preferences. Through continuous
                innovation and collaboration, we strive to be at the forefront
                of the industry, setting new standards for customer-centric
                banking. Our vision is to be the preferred financial
                institution, known for our unwavering commitment to excellence,
                trust, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
