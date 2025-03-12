import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import React from "react";
import { BiEdit, BiPlus } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { MdDelete, MdSort } from "react-icons/md";
import { projectsData, role } from "@/lib/data";
import FormModal from "@/app/components/FormModal";

type Projects = {
  id: number;
  name: string;
  capacity: number;
  employees: string[];
  manager: string;
  lead: string;
  client: string;
  dueDate: string;
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Project Name",
    accessor: "name",
    className: "hidden md:table-cell",
  },
  {
    header: "Team Size",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },

  {
    header: "Employee Names",
    accessor: "employees",
    className: "hidden lg:table-cell",
  },
  {
    header: "Reporting Manager",
    accessor: "manager",
    className: "hidden md:table-cell",
  },
  {
    header: "Project Lead",
    accessor: "lead",
    className: "hidden md:table-cell",
  },
  {
    header: "Client",
    accessor: "client",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const ProjectList = () => {
  const renderRow = (item: Projects) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-200"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.id}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.employees.join(",")}</td>
      <td className="hidden md:table-cell">{item.manager}</td>

      <td className="hidden md:table-cell">{item.lead}</td>
      <td className="hidden md:table-cell">{item.client}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>

      <td>
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
            <BiEdit className="w-4 h-4" />
          </button>
          {role === "admin" || role === "management" && (
            <>
           
            <FormModal table="projects" type="update" data={item} />
            <FormModal table="projects" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Projects </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-200">
              <FiFilter className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200">
              <MdSort className="w-4 h-4" />
            </button>
            {role === "admin" || role === "management" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-200">
              //   <BiPlus className="w-4 h-4" />
              // </button>
              <FormModal table="projects" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={projectsData} />
      <div className=""></div>
      {/* PAGINATION */}
      <Pagination />
      <div className=""></div>
    </div>
  );
};

export default ProjectList;
