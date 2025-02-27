import React from "react";
import { BiMessage, BiUserCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex items-center gap-4 justify-between p-4 bg-white shadow-sm">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center bg-gray-100 border border-gray-300 rounded-md px-3 py-2 w-72">
        <FaSearch className="text-gray-500 w-4 h-4 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 text-sm text-gray-500"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-5 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer shadow">
          <BiMessage className="text-gray-800 w-6 h-6" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative shadow">
          <GrAnnounce className="text-gray-800 w-6 h-6" />
          <div className="absolute -top-3 -right-2 w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[16px] leading-3 font-medium">Ashrun Sanaya</span>
          <span className="text-[12px] text-gray-500 text-right">Admin</span>
        </div>
        <BiUserCircle className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
