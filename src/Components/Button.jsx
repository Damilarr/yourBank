import React from "react";

const Button = (props) => {
  return (
    <button className="px-5 py-2 bg-col60 w-fit font-lexend text-normal  text-grey11 rounded-l-full rounded-r-full">
      {props.text}
    </button>
  );
};

export default Button;
