import Announcements from "@/app/components/Announcements";
import React from "react";
import Image from "next/image";
import Performance from "@/app/components/Performance";

import {
  MdBloodtype,
  MdDateRange,
  MdMail,
  MdWorkHistory,
} from "react-icons/md";
import { BiCalendar, BiPhoneCall } from "react-icons/bi";
import BigCalendar from "@/app/components/BigCalendar";
import Link from "next/link";

import { CgWorkAlt } from "react-icons/cg";
import { GrWorkshop } from "react-icons/gr";
import FormModal from "@/app/components/FormModal";

const SingleEmployeePage = ()=> {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-blue-100 py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold">Sanvi Sharma</h1>
                <FormModal table ="employees" type ="update" data={
                  {
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",

                  }
                }/>
              </div>
              <p className="text-sm text-gray-500">
              Full-Stack Developer | Next.js | React | TypeScript

              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium ">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MdBloodtype className="w-4 h-4" />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MdDateRange className="w-4 h-4" />
                  <span>April 2023</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <MdMail className="w-6 h-6 min-w-[16px] min-h-[16px]" />

                  <span>emp@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <BiPhoneCall className="w-4 h-4" />
                  <span>+1 234 567 89</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-gray-200  p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <BiCalendar className="w-6 h-6 text-blue-950" />
              <div className="">
                <h1 className="text-xl font-semibold">95%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-gray-200  p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <MdWorkHistory className="w-6 h-6 text-blue-950" />
              <div className="">
                <h1 className="text-xl font-semibold">2D, 2D Animation</h1>
                <span className="text-sm text-gray-400">Experience</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-gray-200   p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <GrWorkshop className="w-6 h-6 text-blue-950" />
              <div className="">
                <h1 className="text-xl font-semibold">farmville, 2c break</h1>
                <span className="text-sm text-gray-400">Projects done</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-gray-200   p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <CgWorkAlt className="w-6 h-6 text-blue-950" />
              <div className="">
                <h1 className="text-xl font-semibold">92%</h1>
                <span className="text-sm text-gray-400">
                  OnTime Delivered
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Employee&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-blue-200" href="/">
              Projects done
            </Link>
            <Link className="p-3 rounded-md bg-purple-200" href="/">
              Experience In
            </Link>
            <Link className="p-3 rounded-md bg-yellow-200" href="/">
              Announcements
            </Link>
            <Link className="p-3 rounded-md bg-pink-100" href="/">
              Leaves
            </Link>
            <Link className="p-3 rounded-md bg-cyan-200" href="/">
              Events Participated
            </Link>
          </div>
        </div>
        <Performance/>
        <Announcements />
      </div>
    </div>
  );
};

export default SingleEmployeePage;
