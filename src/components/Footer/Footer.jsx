import React from "react";
import footerLogo from "../../assets/footer-logo.png";
import toTop from "../../assets/to-top.png";
const Footer = () => {
  return (
    <div className="px-[168px] h-[275px] font-[forum] text-primary ">
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
          <div className="flex items-start justify-end flex-col">
            <div className="my-3">
              <h4 className="text-gold text-sm">CONTACT US</h4>
              <span>+1 999 888-76-54</span>
            </div>
            <div>
              <h4 className="text-gold text-sm">EMAIL</h4>
              <span>yukongold@gmail.com</span>
            </div>
          </div>
          <div className="flex items-start justify-end flex-col ">
            <div className="my-3">
              <h4 className="text-gold text-sm"> ADDRESS</h4>
              <span className="text-sm">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </span>
            </div>
            <div>
              <h4 className="text-gold text-sm">OPENIG HOURS</h4>
              <span>9am--6pm</span>
            </div>
          </div>
          <div className=" flex flex-col items-end justify-between">
            <div className="cursor-pointer w-[40px] h-[40px] flex items-center justify-center">
              <img
                src={toTop}
                alt={toTop}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h6 className="text-sm opacity-45">© 2023 — Copyright</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
