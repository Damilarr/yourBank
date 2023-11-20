import React from "react";
import PressNews from "../../../press.json";
import Newsa from "../../assets/newsa.png";
import Newsb from "../../assets/newsb.png";
import Newsc from "../../assets/newsc.png";
import Newsd from "../../assets/newsd.png";

const Press = () => {
  const images = [Newsa, Newsb, Newsc, Newsd];
  PressNews.forEach((element, index) => {
    element.img = images[index];
  });
  return (
    <section className="py-14 flex flex-col space-y-10">
      <div className="flex-col flex ">
        <h1 className="headerr text-col60">Press Releases</h1>
        <p className="headerr-sub text-grey70">
          Stay updated with the latest happenings and exciting developments at
          YourBank through our press releases.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PressNews.map((news) => {
          return (
            <div
              key={news.title}
              className="flex border border-grey15 flex-col rounded-t-3xl rounded-b-lg bg-grey11 p-6 space-y-3"
            >
              <img src={news?.img} alt={news.title} />
              <h2 className="text-white lg:text-2xl md:text-xl text-lg">
                {news.title}
              </h2>
              <div className="flex md:text-base text-sm font-light flex-wrap md:space-y-3 lg:space-y-0 lg:space-x-3">
                <span className="bg-grey10 border border-grey15 py-1 px-2 rounded-l-full rounded-r-full">
                  Location: {news.location}
                </span>
                <span className="bg-grey10 border border-grey15 py-1 px-2 rounded-l-full rounded-r-full">
                  Date: {news.date}
                </span>
              </div>
              <p className="font-light text-grey70 lg:text-lg sm:text-base text-sm">
                {news.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Press;
