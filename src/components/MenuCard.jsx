import React from "react";
import burger from "../assets/menu/burger.png";

const MenuCard = () => {
  return (
    <div className="w-full  text-white  my-[20px]   sm:my-[10%]  h-[97px] flex ">
      <div className="flex-initial w-[90px]">
        <img src={burger} alt={burger} />
      </div>
      <div className="flex-1 mx-[10px]">
        <div className="flex items-center justify-between">
          <h4 className="font-light text-[20px]  whitespace-nowrap">
            Chilli burger
          </h4>
          <hr className="bg-red-200 w-full ml-3 opacity-[0.3]" />
        </div>
        <div>
          <p className="text-[13px] font-light leading-[18px]  sm:text-justify opacity-65">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
      <div className="flex-initial w-[70px]">
        <h4 className="text-border text-[20px]">$20.00</h4>
      </div>
    </div>
  );
};

export default MenuCard;
