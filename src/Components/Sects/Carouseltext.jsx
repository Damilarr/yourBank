import React from "react";
import Quote from "../../assets/Text.png";

const Carouseltext = (props) => {
  return (
    <div className="flex flex-col py-6 space-y-3 mx-4 justify-center items-center border-t border-grey15 relative mt-4">
      <div className="rounded-full px-7 bg-grey10 absolute -top-5 flex justify-center items-center">
        <img src={Quote} alt="quotee" />
      </div>

      <p className="text-center">{props.text}</p>
      <span className="text-col60">{props.author}</span>
    </div>
  );
};

export default Carouseltext;
