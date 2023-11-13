import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col text-white py-14 space-y-4">
      <div className="flex flex-col py-4">
        <h1 className="headerr">
          Our <span className="text-col60 ">Features</span>
        </h1>
        <p className="headerr-sub text-grey70">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>
      <div className="flex justify-between feat-side bg-grey11 rounded-md overflow-scroll md:hidden py-3">
        <button className="feat">Online Banking</button>
        <button>Financial Tools</button>
        <button>Customer Support</button>
      </div>
      <section className="flex justify-between items-start space-x-0 md:space-x-5">
        <div className="md:flex hidden md:w-1/4 xl:w-1/5 flex-col feat-side space-y-4 bg-grey11 px-4 py-7 rounded-lg shadow">
          <button className="feat">Online Banking</button>
          <button>Financial Tools</button>
          <button>Customer Support</button>
        </div>
        <div className="flex flex-col w-full md:w-3/4 xl:w-4/5 px-1 md:px-8 space-y-4">
          <div className="flex md:flex-row flex-col justify-between items-stretch w-full md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex flex-col w-full md:w-1/2 bg-grey11 p-5 rounded-lg border border-grey15">
              <div className="flex justify-between text-lg py-4 items-start">
                <p>24/7 Account Access</p>
                <i className="text-col60 fa fa-up-right-from-square"></i>
              </div>
              <div className="text-grey70 text-sm md:text-base font-light">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 bg-grey11 p-5 rounded-lg border border-grey15">
              <div className="flex justify-between text-lg py-4 items-start">
                <p>Mobile Banking App</p>
                <i className="text-col60 fa fa-up-right-from-square"></i>
              </div>
              <div className="text-grey70 text-sm md:text-base font-light">
                Stay connected to your finances on the go with our user-friendly
                mobile banking app. Easily manage your accounts, deposit checks,
                and make payments from your smartphone or tablet.
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-stretch w-full md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex flex-col w-full md:w-1/2 bg-grey11 p-5 rounded-lg border border-grey15">
              <div className="flex text-lg justify-between py-4 items-start">
                <p>Secure Transactions </p>
                <i className="text-col60 fa fa-up-right-from-square"></i>
              </div>
              <div className="text-grey70 text-sm md:text-base font-light">
                Rest assured knowing that your transactions are protected by
                industry-leading security measures. We employ encryption and
                multi-factor authentication to safeguard your financial
                information.
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 bg-grey11 p-5 rounded-lg border border-grey15">
              <div className="flex text-lg justify-between py-4 items-start">
                <p>Bill Pay and Transfers</p>
                <i className="text-col60 fa fa-up-right-from-square"></i>
              </div>
              <div className="text-grey70 text-sm md:text-base font-light">
                Save time and avoid late fees with our convenient bill pay
                service. Set up recurring payments or make one-time transfers
                between your accounts with just a few clicks.
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;
