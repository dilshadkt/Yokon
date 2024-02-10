import React from "react";
import Label from "./Label";
import WhychooseCard from "./WhychooseCard";
import { data } from "../assets/whychooses/data";

const WhychooseUs = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col w-full px-[18%]">
      <Label content={"WHT CHOOSE US"} />
      <h4 className="sub-head my-[25px]">Our Strenght</h4>
      <div className="w-full  grid grid-cols-4 gap-[15px] my-[9%]">
        {data.map((item, index) => (
          <WhychooseCard
            image={item.image}
            title={item.title}
            description={item.description}
            index={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default WhychooseUs;
