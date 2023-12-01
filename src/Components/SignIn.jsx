import React from "react";

import Testimonial from "./Sects/Testimonial";
import Footer from "./Footer";
import SignInHero from "./Sects/signInHero";

const SignIn = () => {
  return (
    <section className="py-14">
      <SignInHero />
      <Testimonial />
      <Footer show={false} />
    </section>
  );
};

export default SignIn;
