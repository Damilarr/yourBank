import React from "react";

export const ValueBlock = (props) => {
  return (
    <div className="border-l w-fit h-fit border-col60 flex flex-col space-y-2 px-4 py-1">
      <h1 className="text-grey30 text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-medium">
        {props.header}
      </h1>
      <p className="text-grey70 font-light text-sm sm:text-base lg:text-lg">
        {props.text}
      </p>
    </div>
  );
};

const Values = () => {
  return (
    <section className="py-14 flex flex-col space-y-6">
      <div className="flex flex-col space-y-3">
        <h1 className="headerr">
          Our <span className="text-col60">Values</span>
        </h1>
        <p className="text-grey70 text-center  md:text-left text-sm sm:text-base md:text-lg">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-7">
        <ValueBlock
          header="Integrity"
          text="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."
        />
        <ValueBlock
          header="Customer Centricity"
          text="Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."
        />
        <ValueBlock
          header="Collaboration"
          text="We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."
        />
        <ValueBlock
          header="Innovation"
          text="We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."
        />
      </div>
    </section>
  );
};

export default Values;
