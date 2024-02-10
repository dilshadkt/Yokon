import React, { useState } from "react";
import logo from "../assets/logo.png";
import Buttons from "./Buttons";

const Navbar = () => {
  const [isSidePanelOpen, setISidePanelOpen] = useState(false);
  return (
    <nav className="relative px-[14%] sm:px-5 shrink-0 flex items-center justify-between   h-[80px] font-[forum] text-primary">
      <div>
        <img
          src={logo}
          alt="logo"
          className="w-[146px] h-[37px] object-contain sm:w-[100px] lg:w-[150px]"
        />
        {isSidePanelOpen}
      </div>
      <div className="sm:hidden">
        <ul className=" flex items-center justify-between text-[20px] lg:text-lg ">
          <li className="px-5 lg:px-2 cursor-pointer">Menu</li>
          <li className="px-5 lg:px-2 cursor-pointer"> Restaurant</li>
          <li className="px-5 lg:px-2 cursor-pointer"> Locations</li>
          <li className="px-5 lg:px-2 cursor-pointer"> About</li>
          <li className="px-5 lg:px-2 cursor-pointer"> Blog</li>
        </ul>
      </div>
      <div className="md:hidden">
        <Buttons content={"Contact Us"} />
      </div>
      <div>
        <label
          onClick={() => setISidePanelOpen(!isSidePanelOpen)}
          className="btn btn-circle swap swap-rotate z-50"
        >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      <div
        className={`absolute top-0 right-0 w-[80%] opacity-0 h-screen bg-white ${
          isSidePanelOpen && `opacity-100`
        } `}
      ></div>
    </nav>
  );
};

export default Navbar;
