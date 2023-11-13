import React from "react";
import bookIcon from "../../assets/bookicon.png";
import bulbIcon from "../../assets/bulbmoney.png";
import handIcon from "../../assets/handmoney.png";
import homeIcon from "../../assets/home.png";
import paymentIcon from "../../assets/payment.png";
import expansionIcon from "../../assets/expand.png";
import cashIcon from "../../assets/cash.png";
import startupIcon from "../../assets/startup.png";
import dotglow from "../../assets/dotglow.png";
import dotglow2 from "../../assets/glowB.png";

const UseCaseSect = () => {
  return (
    <section className="flex px-2 sm:px-4 font-lexend flex-col space-y-4">
      <div>
        <h1 className="text-col60 headerr">Use Cases</h1>
        <p className="text-grey70 headerr-sub">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial
        </p>
      </div>
      <div className="flex flex-col text-white space-y-4">
        <div className="flex flex-col py-5 md:flex-row justify-between items-start md:space-x-5">
          <div className="flex w-full md:w-1/2 lg:w-[40%] overflow-clip bg-grey11 rounded-xl p-1 sm:p-5 md:p-4 lg:p-6">
            <div className="flex z-10 relative flex-col mx-auto w-full rounded-xl p-3 space-y-3">
              <div className="flex justify-between items-stretch space-x-3 w-full">
                <div className="smallBlack py-3 basis-full lg:px-0 px-2">
                  <img src={bulbIcon} alt="Managing personal" />
                  <h3 className="text-center">Managing Finances</h3>
                </div>
                <div className="smallBlack py-3 basis-full px-2 lg:px-0">
                  <img src={handIcon} alt="saving" />
                  <h3>Saving For the Future</h3>
                </div>
              </div>
              <div className="flex justify-around  w-full space-x-3 items-stretch">
                <div className="smallBlack  py-3 lg:px-0 basis-full px-2">
                  <img src={homeIcon} alt="homeOwnership" />
                  <h3>Home Ownership</h3>
                </div>
                <div className="smallBlack py-3 lg:px-0 px-2 basis-full">
                  <img src={bookIcon} alt="Educational funding" />
                  <h3>Educational Funding</h3>
                </div>
              </div>
              <img
                src={dotglow}
                alt="gloww"
                className="absolute -z-10 -top-9 -left-9 "
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 md:py-0 py-8 space-y-8  md:px-10">
            <h3 className="font-medium text-2xl lg:text-3xl sm:text-left text-center">
              For Individuals
            </h3>
            <p className="text-grey70 font-light text-base lg:text-lg sm:text-left text-center">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>
            <div className="flex sm:flex-row sm:text-left space-y-14 text-center  flex-col  lg:space-x-3 text-col60 text-4xl lg:text-6xl justify-around items-start sm:space-y-0">
              <div className="flex flex-col w-full sm:w-1/3">
                <h3 className="font-medium">78%</h3>
                <p className="font-light text-grey70 text-sm lg:text-base">
                  Secure Retirement Planning
                </p>
              </div>
              <div className="flex flex-col sm:border-l sm:border-t-0 sm:border-b-0 sm:border-r border-t sm:py-0 py-8   border-b  border-dashed border-grey20  w-full sm:w-1/3 px-3">
                <h3 className="font-medium font-lexend">63%</h3>
                <p className="font-light text-grey70 text-sm lg:text-base">
                  Manageable Debt Consolidation
                </p>
              </div>
              <div className="flex flex-col w-full sm:w-1/3 pl-6">
                <h3 className="font-medium">91%</h3>
                <p className="font-light text-grey70 text-sm lg:text-base">
                  Reducing financial burdens
                </p>
              </div>
            </div>
            <button className="bg-grey15 mx-auto sm:mx-0 px-3 py-2 rounded-l-full rounded-r-full border border-grey20 w-fit">
              Learn More
            </button>
          </div>
        </div>
        {/* second part */}
        <div className="flex flex-col py-5 md:flex-row-reverse justify-between items-start md:space-x-5">
          <div className="flex w-full md:w-1/2 lg:w-[40%] overflow-clip bg-grey11 rounded-xl p-1 sm:p-5 md:p-4 lg:p-6">
            <div className="flex z-10 relative flex-col mx-auto w-full rounded-xl p-3 space-y-3">
              <div className="flex justify-between items-stretch space-x-3 w-full">
                <div className="smallBlack py-3 basis-full lg:px-0 px-2">
                  <img src={startupIcon} alt="Startups" />
                  <h3 className="text-center">Startups and Entrepreneurs</h3>
                </div>
                <div className="smallBlack py-3 basis-full px-2 lg:px-0">
                  <img src={cashIcon} alt="Cash Flow Management" />
                  <h3>Cash Flow Management</h3>
                </div>
              </div>
              <div className="flex justify-around  w-full space-x-3 items-stretch">
                <div className="smallBlack  py-3 lg:px-0 basis-full px-2">
                  <img src={expansionIcon} alt="Business Expansion" />
                  <h3>Business Expansion</h3>
                </div>
                <div className="smallBlack py-3 lg:px-0 px-2 basis-full">
                  <img src={paymentIcon} alt="Payment Solutions" />
                  <h3>Payment Solutions</h3>
                </div>
              </div>
              <img
                src={dotglow2}
                alt="gloww2"
                className="absolute -z-10 -right-8 -top-8"
              />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 md:py-0 py-8 space-y-8  md:px-10">
            <h3 className="font-medium text-2xl lg:text-3xl sm:text-left text-center">
              For Businesses
            </h3>
            <p className="text-grey70 font-light text-base lg:text-lg sm:text-left text-center">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </p>
            <div className="flex sm:flex-row sm:text-left space-y-14 text-center  flex-col  lg:space-x-3 text-col60 text-4xl lg:text-6xl justify-around items-start sm:space-y-0">
              <div className="flex flex-col w-full sm:w-1/3">
                <h3 className="font-medium">65%</h3>
                <p className="font-light text-grey70 text-sm lg:text-base">
                  Cash Flow Management
                </p>
              </div>
              <div className="flex flex-col sm:border-l sm:border-t-0 sm:border-b-0 sm:border-r border-t sm:py-0 py-8   border-b  border-dashed border-grey20  w-full sm:w-1/3 px-3">
                <h3 className="font-medium font-lexend">70%</h3>
                <p className="font-light text-grey70 text-sm lg:text-base">
                  Drive Business Expansion
                </p>
              </div>
              <div className="flex flex-col w-full sm:w-1/3 pl-6">
                <h3 className="font-medium">45%</h3>
                <p className="font-light text-grey70 text-sm lg:text-base">
                  Streamline payroll processing
                </p>
              </div>
            </div>
            <button className="bg-grey15 sm:mx-0 mx-auto px-3 py-2 rounded-l-full rounded-r-full border border-grey20 w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSect;
