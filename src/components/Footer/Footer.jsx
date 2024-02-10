import React from "react";
import footerLogo from "../../assets/footer-logo.png";
const Footer = () => {
  return (
    <div className="px-[168px] h-[275px] font-[forum] text-[#D4D5D9] ">
      <div className=" p-4 flex items-center justify-center h-full">
        <div className=" w-full h-full grid grid-cols-4 gap-[32px] p-4">
          <div className="flex flex-col justify-between ">
            <div className="w-[125px] h-[37px]">
              <img
                src={footerLogo}
                alt={footerLogo}
                className="w-full h-full object-contain"
              />
            </div>
            <div className=" w-[80%] flex flex-wrap">
              <div className="">
                Home <span className="mx-2">/</span>
              </div>
              <div className="">
                Blog <span className="mx-2">/</span>
              </div>
              <div className="">
                Sale <span className="mx-2">/</span>
              </div>
              <div className="">
                About Us <span className="mx-2">/</span>
              </div>
              <div className="">
                For customers <span className="mx-2">/</span>
              </div>
              <div className="">
                Contacts <span className="mx-2">/</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-start"></div>
          <div className="">3</div>
          <div className="">3</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
