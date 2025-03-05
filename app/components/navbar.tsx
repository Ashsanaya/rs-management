import React from "react";
import { BiMessage, BiUserCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white w-full">
      {/* SEARCH BAR */}
      <div className="flex items-center gap-2 text-xs rounded-full ring-1 ring-gray-300 px-3 py-2 w-[250px] bg-gray-100">
        <FaSearch className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-gray-700"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer shadow">
          <BiMessage className="text-gray-800 w-6 h-6" />
        </div>
        <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer shadow relative">
          <GrAnnounce className="text-gray-800 w-5 h-5" />
          <div className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center bg-green-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-[14px] font-medium text-gray-800">Ashrun Sanaya</span>
          <span className="text-[12px] text-gray-500">Admin</span>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-blue-500 text-white cursor-pointer">
          <BiUserCircle className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
