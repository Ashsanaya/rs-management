"use client";
import React from "react";
import { MdMore } from "react-icons/md";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2500,
    
  },
  {
    name: 'Feb',
    income: 2500,
    expense: 3200,
  },
  {
    name: 'Mar',
    income: 4600,
    expense: 2400,
  },
  {
    name: 'Apr',
    income: 5400,
    expense: 4000,
  },
  {
    name: 'May',
    income: 7400,
    expense: 5240,
  },
  {
    name: 'Jun',
    income: 5300,
    expense: 3250,
  },
  {
    name: 'Jul',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Aug',
    income: 6000,
    expense: 6300,
  },
  {
    name: 'Sep',
    income: 8000,
    expense: 5400,
  },
  {
    name: 'Oct',
    income: 4000,
    expense: 4400,
  },
  {
    name: 'Nov',
    income: 7000,
    expense: 5400,
  },
  {
    name: 'Dec',
    income: 6000,
    expense: 3200,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-[450px] p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <MdMore className="text-black w-6 h-6" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
          <XAxis 
          dataKey="name"
          axisLine={false}
          tick={{fill:"#d1d5db"}}
          tickLine = {false}
          tickMargin={10}
          />
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend 
          align="center"
          verticalAlign="top"
          wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}
          />
          <Line type="monotone" dataKey="income" stroke="#8884d8" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
