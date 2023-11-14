import React from "react";
import IndividualBtn from "../IndividualBtn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carouseltext from "./carouseltext";

const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className="flex flex-col text-white space-y-14 py-12">
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
      <div className="w-full">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <Carouseltext
            text="I recently started my own business, and YourBank has been instrumental
        in helping me set up my business accounts and secure the financing I
        needed. Their expert guidance and tailored solutions have been
        invaluable."
            author="John D"
          />
          <Carouseltext
            text="I recently started my own business, and YourBank has been instrumental
        in helping me set up my business accounts and secure the financing I
        needed. Their expert guidance and tailored solutions have been
        invaluable."
            author="Mane S"
          />
          <Carouseltext
            text="I recently started my own business, and YourBank has been instrumental
        in helping me set up my business accounts and secure the financing I
        needed. Their expert guidance and tailored solutions have been
        invaluable."
            author="Emily G"
          />
          <Carouseltext
            text="I recently started my own business, and YourBank has been instrumental
        in helping me set up my business accounts and secure the financing I
        needed. Their expert guidance and tailored solutions have been
        invaluable."
            author="Sara T"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
