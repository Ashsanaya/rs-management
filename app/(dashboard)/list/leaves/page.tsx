import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import React from "react";
import { BiEdit, BiPlus } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { MdDelete, MdSort } from "react-icons/md";
import { leaveData, role } from "@/lib/data";

type Leaves = {
 
  id: number;
  leaveType: string;
  days: number;
  startTime: string;
  endTime: string;
  reason:string;
  manager:string;
  status:string;
  lop:boolean;  
  
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "leave Type",
    accessor: "leaveType",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Days",
    accessor: "days",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },

  {
    header: "Reason",
    accessor: "reason",
    className: "hidden md:table-cell",
  },
  {
    header: "Reporting Manager",
    accessor: "manager",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden md:table-cell",
  },
  {
    header: "LOP",
    accessor: "lop",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Actions",
    accessor: "action",
  },
];

const LeaveList = () => {
  const renderRow = (item: Leaves) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-200"
    >
      <td className="flex items-center gap-4 p-4">
      
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.id}</h3>
          
        </div>
      </td>
      <td className="hidden md:table-cell">{item.leaveType}</td>
      <td className="hidden md:table-cell">{item.days}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td className="hidden md:table-cell">{item.reason}</td>
      <td className="hidden md:table-cell">{item.manager}</td>
      <td className="hidden md:table-cell">{item.status}</td>
      <td className="hidden md:table-cell">{item.lop}</td>

      <td>
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
            <BiEdit className="w-4 h-4" />
          </button>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-200">
              <MdDelete className="w-4 h-4" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Leaves </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <FiFilter className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200">
              <MdSort className="w-4 h-4" />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200">
                <BiPlus className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={leaveData} />
      <div className=""></div>
      {/* PAGINATION */}
      <Pagination />
      <div className=""></div>
    </div>
  );
};

export default LeaveList;
