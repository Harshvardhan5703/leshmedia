import React from "react";
import Logo from "./logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full p-5 flex justify-between items-center bg-black/30 fixed top-0 z-50 backdrop-blur-sm">
      <div className="p-2">
        <Link href={"/"} className="hover:opacity-80 transition-opacity">
          <Logo size={32} />
        </Link>
      </div>
      <div className="p-2">
        <Link 
          href="/contact" 
          className="relative bg-gradient-to-r from-[#6D6ADD] to-[#32D5C4] hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 group inline-block"
        >
          <span className="relative z-10">Let's Talk</span>
          
          {/* Animated background effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;