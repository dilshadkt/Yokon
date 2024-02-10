import React from "react";
import special_dish from "../assets/special_dish.png";
import Label from "./Label";
import Buttons from "./Buttons";

const SpecialDish = () => {
  return (
    <div className="flex h-screen sm:h-full w-full sm:flex-col">
      <div className="flex-1 flex items-center justify-center">
        <img src={special_dish} alt={special_dish} />
      </div>
      <div className="flex-1 flex items-center justify-start  sm:justify-center   sm:py-[10%]  ">
        <div className="h-[55%] w-[52%] sm:w-full sm:h-full  ml-[14%] sm:ml-0">
          <div className="flex flex-col items-start justify-cente sm:items-center">
            <Label content={"SPECIAL DISH"} />
            <h3 className="sub-head ">Yukon Fries</h3>
            <p className="text-left w-[83%] opacity-[60%] text-white font-light my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <div className="flex items-center ont-light font-[forum]">
              <h3 className="text-gold text-[44px] f">$20.00</h3>
              <span className="text-white opacity-[60%] text-[26px] ml-3 ">
                <del>$40.00</del>
              </span>
            </div>
            <div className="my-3">
              <Buttons content={"View All Menu"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDish;
