import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import React from "react";
import { FiFilter } from "react-icons/fi";
import Image from "next/image";
import { role } from "@/lib/data";
import { GrView } from "react-icons/gr";
import FormModal from "@/app/components/FormModal";
import { MdSort } from "react-icons/md";
import prisma from "@/lib/prisma";
import { Prisma} from "@prisma/client";
import { FaUser } from "react-icons/fa";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { departmentLabels, roleLabels } from "@/lib/enumLabels";

type EmployeeList = {
  id: string;
  name: string;
  email: string | null;
  img: string | null;
  phone: string | null;
  address: string;
  role: keyof typeof roleLabels;
  department: keyof typeof departmentLabels;
  management: { name: string };
  projects: { name: string }[];
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
    header: "Designation",
    accessor: "role",
    className: "hidden md:table-cell",
  },
  {
    header: "Department",
    accessor: "department",
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
const renderRow = (item: EmployeeList ) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-200"
  >
    <td className="flex items-center gap-4 p-4">
        {item.img ? (
          <Image
            src={item.img}
            alt="User"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <FaUser className="w-10 h-10 text-gray-400 bg-gray-100 rounded-full p-2" />
        )}
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.id}</td>
    <td>{roleLabels[item.role]}</td>
    <td>{departmentLabels[item.department]}</td>

    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.management?.name}</td>

    <td className="hidden md:table-cell">{item.projects.map((project) => project.name).join(",")}</td>

    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
          <GrView className="w-4 h-4" />
        </button>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-200">
          //   <MdDelete className="w-4 h-4" />
          // </button>
          <FormModal table="employees" type= "delete" id={item.id}/>
        )}
      </div>
    </td>
  </tr>
);

const EmployeeListPage = async (props: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const page = props.searchParams?.page;
  const p = page ? parseInt(page) : 1;


  const [data, count] = await prisma.$transaction([
  prisma.employees.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      img: true,
      phone: true,
      address: true,
      role: true,
      management: {
        select: {
          name: true,
        },
      },
      projects: {
        select: {
          name: true,
        },
      },
    },
    take: ITEM_PER_PAGE,
    skip: ITEM_PER_PAGE * (p - 1),
  }),
  prisma.employees.count(),
]);

  
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Employee List</h1>
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
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200">
              //   <BiPlus className="w-4 h-4" />
              // </button>
              <FormModal table="employees"  type= "create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      <div className=""></div>
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
      <div className=""></div>
    </div>
  );
};

export default EmployeeListPage;
