import React from "react";
import secure from "../../assets/secure.png";
import fraud from "../../assets/fraud.png";
import multi from "../../assets/multi.png";
import mobile from "../../assets/mobile.png";

export const Box = ({ ...props }) => {
  return (
    <div className="flex border border-grey15 rounded-t-[3rem] space-y-4 flex-col p-5 rounded-xl bg-[url('/src/assets/SecurityBg.png')] bg-grey11">
      <div className="flex space-x-2 items-center">
        <img src={props.img} className="w-14" alt={props.title} />
        <span className="text-white lg:text-2xl md:text-xl text-lg">
          {props.title}
        </span>
      </div>
      <p className="text-grey70 font-light lg:text-lg md:text-base text-sm">
        {props.text}
      </p>
    </div>
  );
};
const HowWeProtct = () => {
  return (
    <section className="flex flex-col space-y-10">
      <div className="flex flex-col">
        <h2 className="text-white headerr">
          How We <span className="text-col60"> Protect You</span>
        </h2>
        <p className="headerr-sub text-grey70 font-light">
          At YourBank, we prioritize the security and confidentiality of your
          financial information. Our state-of-the-art encryption technology and
          stringent data protection measures ensure your assets and transactions
          are safeguarded at all times
        </p>
      </div>
      <div className="md:bg-[url('/src/assets/SecurityBg.png')] bg-no-repeat grid rounded-t-[3rem] bg-contain gap-6 md:grid-cols-2 grid-cols-1 lg:p-10 md:p-7 sm:p-5 p-3">
        <Box
          img={secure}
          title="Secure Online Banking Platform"
          text="Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission."
        />
        <Box
          img={multi}
          title="Multi-Factor Authentication"
          text="To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account."
        />
        <Box
          img={fraud}
          title="Fraud Monitoring"
          text="We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind."
        />
        <Box
          img={mobile}
          title="Secure Mobile Banking"
          text="Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected."
        />
      </div>
    </section>
  );
};

export default HowWeProtct;
