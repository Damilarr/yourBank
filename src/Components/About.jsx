import React from "react";
import { HeroTop } from "./Careers";
import AboutHero from "../assets/AboutHero.png";
import Mission from "./Sects/Mission";
import Press from "./Sects/Press";
import Footer from "./Footer";

const About = () => {
  return (
    <section className="w-full py-10 h-screen">
      <HeroTop
        ha="Where Banking Meets"
        hb="Excellence!"
        small="Welcome to yourBank,"
        paragraph="At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
        imgg={AboutHero}
      />
      <Mission />
      <Press />
      <Footer show={false} />
    </section>
  );
};

export default About;
