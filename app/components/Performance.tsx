"use client"
import React from 'react'
import { CgMore } from 'react-icons/cg';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
const data =[
    {name: 'Group A', value:96, fill:"#C3EBFA"},
    {name: 'Group B', value:4, fill:"#FAE27C"},
]

const Performance = () => {
    return (
      <div className="bg-white p-4 rounded-md h-80 relative">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Performance</h1>
          <CgMore className="text-black w-6 h-6" />
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              fill="#8884d8"
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold">96%</h1>
          <p className="text-xs text-gray-400 ">projects delivered on time </p>
        </div>
        <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">1st quater- 2nd quater</h2>
      </div>
    );
  };
  
  export default Performance;