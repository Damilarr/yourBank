import React from "react";

const Faq = () => {
  return (
    <section className="flex flex-col font-lexend space-y-10 py-16">
      <div className="flex flex-col space-y-3">
        <h1 className="headerr">
          <span className="text-col60">Frequently</span>Asked Questions
        </h1>
        <p className=" text-grey70 headerr-sub">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
      </div>
      <div className="grid gap-3 md:gap-5 grid-cols-1 sm:grid-cols-2 relative">
        <div className="border border-grey15 rounded-lg px-6 pt-6 pb-16">
          <div className="border-b border-grey15 pb-2">
            <h1 className="text-white">
              How do I open an account with YourBank?
            </h1>
          </div>
          <p className="text-lg pt-2 text-grey70 font-light">
            Opening an account with YourBank is easy. Simply visit our website
            and click on the "Open an Account" button. Follow the prompts,
            provide the required information, and complete the application
            process. If you have any questions or need assistance, our customer
            support team is available to help.
          </p>
        </div>
        <div className="border border-grey15 rounded-lg px-6 pt-6 pb-16">
          <div className="border-b border-grey15 pb-4">
            <h1 className="text-white">
              What documents do I need to provide to apply for a loan?
            </h1>
          </div>
          <p className="text-lg pt-2 text-grey70 font-light">
            The documents required for a loan application may vary depending on
            the type of loan you are applying for. Generally, you will need to
            provide identification documents (such as a passport or driver's
            license), proof of income (such as pay stubs or tax returns), and
            information about the collateral (if applicable). Our loan officers
            will guide you through the specific requirements during the
            application process.
          </p>
        </div>
        <div className="border border-grey15 rounded-lg px-6 pt-6 pb-16">
          <div className="border-b border-grey15 pb-4">
            <h1 className="text-white">How can I access my accounts online?</h1>
          </div>
          <p className="text-lg pt-2 text-grey70 font-light">
            Accessing your accounts online is simple and secure. Visit our
            website and click on the "Login" button. Enter your username and
            password to access your accounts. If you haven't registered for
            online banking, click on the "Enroll Now" button and follow the
            registration process. If you need assistance, our customer support
            team is available to guide you.
          </p>
        </div>
        <div className="border border-grey15 rounded-lg px-6 pt-6 pb-16">
          <div className="border-b border-grey15 pb-4">
            <h1 className="text-white">
              Are my transactions and personal information secure?
            </h1>
          </div>
          <p className=" pt-2 text-grey70 font-light text-lg">
            At YourBank, we prioritize the security of your transactions and
            personal information. We employ industry-leading encryption and
            multi-factor authentication to ensure that your data is protected.
            Additionally, we regularly update our security measures to stay
            ahead of emerging threats. You can bank with confidence knowing that
            we have robust security systems in place.
          </p>
        </div>
        <div className="h-1/4 w-full bg-gradient-to-b from-transparent via-grey10 bottom-0 to-grey10 absolute"></div>
      </div>
      <button className="px-2 py-1 rounded-l-full rounded-r-full text-white border border-grey15 bg-grey11 w-fit mx-auto">
        Load All FAQs
      </button>
    </section>
  );
};

export default Faq;
