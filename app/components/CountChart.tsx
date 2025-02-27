"use client";
import { CgMore } from "react-icons/cg";
import { MdMore } from "react-icons/md";
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
    fill: "#8884d8",
  },
  {
    name: "Female",
    count: 16,
    fill: "#83a6ed",
  },
  {
    name: "Male",
    count: 120,
    fill: "#8dd1e1",
  },
];

const CountChart = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-lg font-semibold">Employees</h1>
      <CgMore className="text-black w-6 h-6" />
    </div>
  );
};
