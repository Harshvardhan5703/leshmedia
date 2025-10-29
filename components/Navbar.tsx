import React from "react";
import Logo from "./logo";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="w-full p-5 flex justify-between items-center bg-black/30 fixed top-0 z-50">
      <div className="p-2">
        <Link href={"/"}>
          <Logo size={32} />
        </Link>
      </div>
      <div className="p-2" >
       <Link href={"#"} className="text-white hover:text-gray-300 mx-4">
          Let{"'"}s Talk
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
