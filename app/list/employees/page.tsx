import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import React from "react";
import { BiPlus } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { MdDelete, MdSort } from "react-icons/md";
import Image from "next/image";
import { employeeData, role } from "@/lib/data";
import { GrView } from "react-icons/gr";

type Employee = {
  
  id: number;
  employeeId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  manager: string;
  project: string[];
  address: string;
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Employee ID",
    accessor: "employeeId",
    className: "hidden md:table-cell",
  },

  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Manager",
    accessor: "manager",
    className: "hidden md:table-cell",
  },
  {
    header: "Project",
    accessor: "project",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const EmployeeList = () => {
  const renderRow = (item: Employee) => (
    <tr  key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-200">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.employeeId}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.manager}</td>

      <td className="hidden md:table-cell">{item.project}</td>

      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
            <GrView className="w-4 h-4" />
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
        
        <h1 className="hidden md:block text-lg font-semibold">
          
          Employee List
        </h1>
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
      <Table columns={columns} renderRow={renderRow} data={employeeData} />
      <div className=""></div>
      {/* PAGINATION */}
      <Pagination />
      <div className=""></div>
    </div>
  );
};

export default EmployeeList;
