"use client";
import React, { JSX, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { MdDelete, MdEdit } from "react-icons/md";
import dynamic from "next/dynamic";


const ManagerForm = dynamic(() => import("./forms/ManagerForm"),{
  loading:()=> <h1>Loading...</h1>
});

const EmployeeForm = dynamic(() => import("./forms/EmployeeForm"),{
  loading:()=> <h1>Loading...</h1>
});


const forms:{
  [key: string]:(type:"create"|"update", data?:any) => JSX.Element;
}={
management:(type,data) => <ManagerForm type={type} data={data}/>,
employees:(type,data) => <EmployeeForm type={type} data={data}/>,
}



const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "management"
    | "employees"
    | "hr"
    | "it"
    | "projects"
    | "team"
    | "leaves"
    | "events"
    | "announcements"
    | "attendance";
  type: "create" | "update" | "delete";
  data?: any;
  id?: string;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow-200"
      : type === "update"
      ? "bg-blue-200"
      : "bg-purple-200";
  const [open, setOpen] = useState(false);
  const getIcon = () => {
    if (type === "create") return <FiPlus className="w-6 h-6 bg-purple-200 rounded-xl" />;
    if (type === "update") return <MdEdit className="w-6 h-6 bg-purple-200 rounded-xl" />;
    if (type === "delete") return <MdDelete className="w-6 h-6 bg-purple-200 rounded-xl" />;
    return null;
  };
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this{table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
   ) : type === "create" || type === "update" ? (
    forms[table](type, data)
  ) : (
    "Form not found!"
  );
};
  return (
    <>
      <button
        className={
          "${size} flex items-center justify-center rounded-full ${bgColor} border border-gray-300 shadow-md"
        }
        onClick={() => setOpen(true)}
      >
        {getIcon()}
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 round-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form/>
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <CgClose className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
