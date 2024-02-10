import React from "react";

const OfferCards = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h5 className="text-center mx-1 sm:hidden  mt-1  text-[17px] mb-[10%] opacity-[60%] text-white font-light font-sans">
        {description}
      </h5>
      <div className="h-[280px] sm:w-full mb-2">
        <img src={image} alt={image} className="h-full w-full object-cover" />
      </div>

      <h3 className="text-white text-2xl my-4  ">{title}</h3>
      <button className="text-gold text-[14px] cursor-pointer">
        VIEW MENU
      </button>
    </div>
  );
};

export default OfferCards;
