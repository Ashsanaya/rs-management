import React from "react";
import { CgMore } from "react-icons/cg";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple-300 even:bg-yellow-200 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-800">
          2024/25
        </span>
        <CgMore className="w-4 h-4" />
      </div>
      <h1 className="text-2xl font-semibold my-4">123</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
