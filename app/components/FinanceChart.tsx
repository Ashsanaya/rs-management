"use client";
import React from "react";
import { MdMore } from "react-icons/md";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,
    
  },
  {
    name: 'Feb',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Mar',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Apr',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'May',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Jun',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Jul',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Aug',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Sep',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Oct',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Nov',
    income: 4000,
    expense: 2400,
  },
  {
    name: 'Dec',
    income: 4000,
    expense: 2400,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
