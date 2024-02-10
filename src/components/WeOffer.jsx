import React from "react";
import Label from "./Label";
import burger from "../assets/weofffer/burger.png";
import fries from "../assets/weofffer/fries.png";
import coffee from "../assets/weofffer/coffee.png";
import OfferCards from "./OfferCards";
const WeOffer = () => {
  return (
    <div className="h-screen sm:h-full flex items-center justify-center flex-col">
      '
      <Label content={"FLAVORS FOR ROYALITY"} />
      <h3 className="font-[forum] text-white sm:text-center text-[56px] my-2">
        We Offer Top Notch
      </h3>
      <div className=" w-[68%] sm:w-full sm:px-5 flex sm:flex-col  font-[forum] ">
        <div className="flex-1  ">
          <OfferCards image={burger} title={"Burgers"} />
        </div>
        <div className="flex-initial w-[40%] sm:w-full sm:my-[20%] ">
          <OfferCards
            image={fries}
            title={"Fries"}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,`}
          />
        </div>
        <div className="flex-1 ">
          <OfferCards image={coffee} title={"Coffee"} />
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
