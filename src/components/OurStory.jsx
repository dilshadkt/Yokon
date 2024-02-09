import React from "react";
import ourStory from "../assets/outstory.png";
import Label from "../components/Label";
import Buttons from "../components/Buttons";
const OurStory = () => {
  return (
    <div className="flex items-center justify-center h-screen px-[5%]">
      <div className="w-full  h-[81%] flex">
        <div className="flex-initial w-[45%]  flex items-start  justify-end">
          <div className=" flex flex-col items-center w-[60%] my-[6%]">
            <Label content={"OUR STORY"} />
            <h3 className="font-[forum] text-white text-[55px] text-center leading-[52px] my-4">
              Every Flavor <br /> Tells a Story
            </h3>
            <p
              className="text-center w-[83%] opacity-[60%] text-white font-light my-2
            "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat
            </p>
            <div className="text-[20x] text-white my-2 font-medium">
              Book Through Call{" "}
            </div>
            <h3 className="text-gold font-light text-[32px]">+91 1234567890</h3>
            <div className="my-5">
              <Buttons content={"Read More"} />
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <img
            src={ourStory}
            alt={ourStory}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
