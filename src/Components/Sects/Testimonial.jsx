import React from "react";
import IndividualBtn from "../IndividualBtn";

const Testimonial = () => {
  return (
    <section className="flex flex-col text-white">
      <div className="flex md:flex-row flex-col items-end space-y-4 md:space-y-0">
        <div className="flex flex-col w-full md:w-2/3">
          <h1 className="headerr">
            Our <span className="text-col60">Testimonials</span>
          </h1>
          <p className="headerr-sub text-grey70">
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className="flex h-fit mx-auto md:mx-0 w-fit xl:w-1/3  text-sm py-2 px-3 bg-grey11  border-2 border-grey20 rounded-l-full rounded-r-full justify-between">
          <IndividualBtn />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
