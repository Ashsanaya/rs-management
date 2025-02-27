"use client";
import React from "react";
import { FaBullseye } from "react-icons/fa";
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
    present: 0,
    absent: 136,
  },
];

const AttendenceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <MdMore className="text-black w-6 h-6" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip 
          contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar 
          dataKey="present" 
          fill="#8884d8" 
          legendType="circle"
          radius={[10,10,0,0]} 
          />
          <Bar 
          dataKey="absent" 
          fill="#82ca9d" 
          legendType="circle" 
          radius={[10,10,0,0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendenceChart;
