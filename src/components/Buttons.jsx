import React from "react";

const Buttons = ({ content }) => {
  return (
    <button className="text-primary border-2 text-[19px] font-light border-border rounded-full py-[3px] px-[18px] bg-transparent hover:bg-border hover:text-black transition-all duration-300 ease-in">
      {content}
    </button>
  );
};

export default Buttons;
