"use client";
import React from "react";
import { MdMore } from "react-icons/md";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 122,
    absent: 14,
  },
  {
    name: "Tue",
    present: 132,
    absent: 4,
  },
  {
    name: "Wed",
    present: 126,
    absent: 10,
  },
  {
    name: "Thu",
    present: 130,
    absent: 6,
  },
  {
    name: "Fri",
    present: 120,
    absent: 16,
  },
  {
    name: "Sat",
    present: 6,
    absent: 130,
  },
  {
    name: "Sun",
    present: 8,
    absent: 128,
  },
];

const AttendenceChart = () => {
  return <div className="mt-6">
    <div className="">
        <h1>Attendance</h1>
        <MdMore className="text-black w-6 h-6"/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>;
};

export default AttendenceChart;
