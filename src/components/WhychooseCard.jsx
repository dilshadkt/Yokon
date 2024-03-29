import React from "react";

const WhychooseCard = ({ image, title, description, index }) => {
  return (
    <div
      style={{ background: `${index % 2 === 0 ? `#1C1C1C` : `#0F0F0F`}` }}
      className={`flex items-center justify-center flex-col p-4 text-white  font-[forum]  `}
    >
      <div className="w-[75px] my-4">
        <img src={image} alt={image} />
      </div>
      <h4 className="my-[10px] text-[23px]">{title}</h4>
      <p className="text-[14px] font-light leading-[18px]  opacity-65  sm:w-[60%]  text-center">
        {description}
      </p>
    </div>
  );
};

export default WhychooseCard;
