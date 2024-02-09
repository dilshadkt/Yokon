import React from "react";
import star from "../assets/svg/star.svg";
const Label = ({ content }) => {
  return (
    <div className="flex items-center text-white ">
      <img src={star} alt="star" />
      <h5 className="text-[16px] font-light tracking-widest text-gold font-[Inter] mx-2 ">
        {content}
      </h5>
      <img src={star} alt="star" />
    </div>
  );
};

export default Label;
