import React from "react";
import Complete from "../../assets/compete.png";
import Health from "../../assets/health.png";
import Retire from "../../assets/retire.png";
import Work from "../../assets/work.png";

export const BenBox1 = (props) => {
  return (
    <div className="md:w-1/2 bg-[url('/src/assets/SecurityBg.png')] bg-no-repeat w-full flex flex-col bg-grey11 md:rounded-tr-[2rem] md:rounded-bl-[2rem] md:rounded-tl-[3rem] md:rounded-br-2xl rounded-t-[3rem] rounded-b-2xl p-6 space-y-4">
      <div className="flex space-x-3 items-center">
        <img src={props.img} className="w-14" alt={props.title} />
        <h2 className="text-lg font-lexend">{props.title}</h2>
      </div>
      <p className="text-grey70 text-lg font-light">{props.text}</p>
    </div>
  );
};
export const BenBox2 = (props) => {
  return (
    <div className="md:w-1/2 w-full bg-[url('/src/assets/SecurityBg.png')] bg-no-repeat rounded-t-[3rem] rounded-b-2xl  flex flex-col bg-grey11 md:rounded-br-[2rem] md:rounded-tl-[3rem] md:rounded-bl-2xl md:rounded-tr-2xl  p-6 space-y-4">
      <div className="flex space-x-3 items-center">
        <img src={props.img} className="w-14" alt={props.title} />
        <h2 className="text-lg font-lexend">{props.title}</h2>
      </div>
      <p className="text-grey70 text-lg font-light">{props.text}</p>
    </div>
  );
};
const Benefits = () => {
  return (
    <section className="flex flex-col font-lexend space-y-7 py-14">
      <div className="flex flex-col">
        <h1 className="headerr">
          Our <span className="text-col60">Benefits</span>
        </h1>
        <p className="text-grey70 text-center  md:text-left text-sm sm:text-base md:text-lg">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>
      <div className="flex  flex-col space-y-4 md:space-y-8 relative">
        <section className="flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between relative items-stretch md:space-x-8">
          <BenBox1
            title="Competitive Compensation"
            img={Complete}
            text="We provide a competitive salary package that recognizes the skills
              and expertise of our employees. YourBank believes in rewarding
              exceptional performance and offering opportunities for financial
              growth."
          />
          <p className="h-full hidden md:block absolute outline-grey15 outline-1 outline-dashed right-1/2"></p>

          <BenBox2
            title="Health and Wellness"
            img={Health}
            text="We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."
          />
        </section>
        {/* <p className="w-full absolute outline-grey15 outline-1 outline-dashed bottom-1/2 m-0 "></p> */}
        <section className="flex md:flex-row flex-col justify-between items-stretch space-y-4 md:space-y-0 md:space-x-8 relative">
          <BenBox2
            text="YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term."
            img={Retire}
            title="Retire Planning"
          />
          <p className="h-full hidden md:block absolute  outline-grey15 outline-1 outline-dotted  right-1/2"></p>
          <BenBox1
            text="We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments."
            img={Work}
            title="Work-Life Balance"
          />
        </section>
      </div>
    </section>
  );
};

export default Benefits;
