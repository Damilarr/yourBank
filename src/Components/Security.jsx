import React from "react";
import { HeroTop } from "./Careers";
import SecurityHero from "../assets/securityHero.png";
import HowWeProtct from "./Sects/HowWeProtct";
import Faq from "./Sects/Faq";
import Footer from "./Footer";

const Security = () => {
  return (
    <section className="py-14 space-y-5">
      <HeroTop
        ha="Your Security is Our"
        hb="Top Priority"
        paragraph="At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."
        imgg={SecurityHero}
      />
      <HowWeProtct />
      <Faq />
      <Footer show={false} />
    </section>
  );
};

export default Security;
