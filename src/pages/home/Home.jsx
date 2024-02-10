import React from "react";
import landpage from "../../assets/landpage.jpeg";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

import Buttons from "../../components/Buttons";
import Label from "../../components/Label";
const Home = () => {
  return (
    <div>
      <main className="relative z-0 w-full h-screen  overflow-hidden  ">
        <div className="absolute max-container h-full z-30 w-full opacity-95 flex flex-col">
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center  h-full "
          >
            <Label content={"DELIGHTFUL EXPERIENCE"} />
            <h1 className="text-[110px] text-gold font-[forum]  leading-[108px] my-[2%] text-center">
              Elevate Your <br /> Taste Experience
            </h1>
            <h5 className="text-primary text-[16px] font-[Inter] mb-6">
              Crafting Culinary Memories, One Bite at a Time
            </h5>
            <Buttons content={"View Our Menu"} />
          </motion.div>
        </div>

        <img
          src={landpage}
          alt="landpage"
          className="absolute w-full h-full object-cover scale-105"
        />
      </main>
    </div>
  );
};

export default Home;
