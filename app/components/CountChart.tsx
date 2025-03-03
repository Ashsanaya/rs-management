"use client";
import { CgMore } from "react-icons/cg";
import Image from "next/image";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 136,
    fill: "#9EC5EC",
  },
  {
    name: "Female",
    count: 16,
    fill: "#FFD700",
  },
  {
    name: "Male",
    count: 120,
    fill: "#BF6CE9",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Employees</h1>
        <CgMore className="text-black w-6 h-6" />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#060270" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/assets/maleFemale.png" alt="" width={40} height={40} className="absoulte top-1/2 left-1/2 -translate-x-1/8 -translate-y-1/8"/>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-end gap-8 mt-2">
        <div className="flex flex-col items-end gap-1">
          <div className="w-5 h-5 bg-blue-300 rounded-full " />
          <h1 className="font-bold">120</h1>
          <h2 className="text-xs text-gray-600 items-center">Male (88%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
          <h1 className="font-bold">16</h1>
          <h2 className="text-xs text-gray-600 items-center">Female (12%)</h2>
        </div>
      </div>
    </div>
  );
};
export default CountChart;
