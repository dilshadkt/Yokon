import React from "react";
import Label from "./Label";
import miniStar from "../assets/svg/mini-star.svg";
import MenuCard from "./MenuCard";

import Buttons from "../components/Buttons";
const Menu = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Label content={"SPECIAL SELECTION"} />
      <div className="my-3">
        <h3 className="sub-head">Delicious Menu</h3>
      </div>
      <div className="  w-[68%] flex justify-center  flex-col my-4">
        <hr className="w-full border-[1px] border-gold opacity-40" />
        <div className="flex items-center justify-center my-3">
          <ul className="flex text-white items-center font-light font-[forum]">
            <li className="mx-8">
              <h4 className="text-[22px]">BURGER</h4>
            </li>
            <li className="mx-8">
              <img src={miniStar} alt={miniStar} />
            </li>
            <li className="mx-8">
              <h4 className="text-[22px]">FRIES</h4>
            </li>
            <li className="mx-8">
              <img src={miniStar} alt={miniStar} />
            </li>
            <li className="mx-8">
              <h4 className="text-[22px]">COFFEE</h4>
            </li>
            <li className="mx-8">
              <img src={miniStar} alt={miniStar} />
            </li>
            <li className="mx-8">
              <h4 className="text-[22px]">JUICES</h4>
            </li>
          </ul>
        </div>
        <hr className="w-full border-[1px] border-gold opacity-40" />
        <div className="w-full  py-[25px] flex">
          <div className="flex-1  ">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
          <div className="flex-initial bg-gold opacity-30 w-[1px] mx-[25px]"></div>
          <div className="flex-1   ">
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
        <div className="my-3">
          <h4 className="text-primary text-center font-light opacity-80 text-lg">
            During winter daily from 7:00 AM to 6:00 PM
          </h4>
        </div>
        <div className="w-full my-[6px] flex justify-center">
          <Buttons content={"View All Menu"} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
