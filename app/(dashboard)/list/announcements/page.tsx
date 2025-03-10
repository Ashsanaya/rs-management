import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import React from "react";
import { BiEdit, BiPlus } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { MdDelete, MdSort } from "react-icons/md";
import { announcementsData, role } from "@/lib/data";
import { GrView } from "react-icons/gr";
import FormModal from "@/app/components/FormModal";

type Announcement = {
 
  id: number;
  title: string;
  capacity: number;
  date: string;
  sendBy:string;
  startTime: string;
  endTime: string;
  location: string;
  message: string;
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Title",
    accessor: "title",
    className: "hidden md:table-cell",
  },
  {
    header: "Team Size",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },

  {
    header: "Send By",
    accessor: "sendBy",
    className: "hidden lg:table-cell",
  },
 
  {
    header: "Date",
    accessor: "lead",
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
    header: "Location",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Message",
    accessor: "message",
    className: "hidden md:table-cell",
  },
  
 
  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncementList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-200"
    >
      <td className="flex items-center gap-4 p-4">
      
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.id}</h3>
          
        </div>
      </td>
      <td className="hidden md:table-cell">{item.title}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.sendBy}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td className="hidden md:table-cell">{item.location}</td>
      <td className="hidden md:table-cell">{item.message}</td>

      <td>
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
            <GrView className="w-4 h-4" />
          </button>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-200">
            //   <MdDelete className="w-4 h-4" />
            // </button>
             <FormModal table="announcements"  type= "delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Announcements </h1>
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
              <FormModal table="announcements"  type= "create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      <div className=""></div>
      {/* PAGINATION */}
      <Pagination />
      <div className=""></div>
    </div>
  );
};

export default AnnouncementList;


