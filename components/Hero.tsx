import React from "react";
import Navbar from "./Navbar";



const Hero = () => {
  return (
    <div className="h-screen w-full ">
       <Navbar/>
      <div className="flex flex-col justify-center items-center h-full text-white">
        <div className="flex gap-7">
          <div className="w-4 h-4 bg-[#6D6ADD] self-center"></div>

          <h1 className="  text-[10rem] font-serif mb-4 font-extrabold uppercase">
            Lesh Media
          </h1>

          <div className="w-4 h-4 bg-[#6D6ADD] self-center"></div>
        </div>

        <p className="text-xl mb-8">Growth Made Effort-Lesh</p>
      </div>
    </div>
  );
};

export default Hero;
