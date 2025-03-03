import { role } from "@/lib/data";
import Link from "next/link";
import { BiCalendar, BiLogOut, BiMessage } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaUsers, FaBriefcase } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { GrAnnounce, GrGroup, GrUserManager } from "react-icons/gr";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome className="w-6 h-6" />,
        label: "Home",
        href: "/",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <GrUserManager className="w-6 h-6" />,
        label: "Management",
        href: "/management",
        visible: ["admin", "management"],
      },
      {
        icon: <GrGroup className="w-6 h-6" />,
        label: "Employees",
        href: "/employees",
        visible: ["admin", "management"],
      },
      {
        icon: <FaBriefcase className="w-6 h-6" />,
        label: "Hr",
        href: "/hr",
        visible: ["admin", "management"],
      },
      {
        icon: <FaUsers className="w-6 h-6" />,
        label: "Attendance",
        href: "/AttendanceChart",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <BiCalendar className="w-6 h-6" />,
        label: "Events",
        href: "/EventCalendar",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <BiMessage className="w-6 h-6" />,
        label: "Messages",
        href: "/messages",
        visible: ["admin", "management", "employees"],
      },
      {
        icon: <GrAnnounce className="w-6 h-6" />,
        label: "Announcement",
        href: "/Announcements",
        visible: ["admin", "management", "employees", "hr"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile className="w-6 h-6" />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <FcSettings className="w-6 h-6" />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <BiLogOut className="w-6 h-6" />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "management", "employees", "hr"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-md">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          {/* Section Title */}
          <span className="hidden lg:block text-gray-400 font-bold my-4">
            {section.title}
          </span>

          {/* Menu Items */}
          {section.items
            .filter((item) => role && item.visible.includes(role))
            .map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-blue-200"
              >
                {/* Icon with fixed size */}
                <span className="w-6 h-6 flex items-center justify-center">
                  {item.icon}
                </span>

                {/* Label */}
                <span className="hidden lg:block font-semibold text-gray-500">
                  {item.label}
                </span>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
};
export default Menu;
