import { role } from "@/lib/data";
import Link from "next/link";
import { BiCalendar, BiLogOut, BiMessage } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { CgLock, CgProfile } from "react-icons/cg";
import { FaHome, FaUsers, FaBriefcase } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { GrAnnounce, GrGroup, GrUserManager } from "react-icons/gr";
import { MdComputer } from "react-icons/md";
import { TiMediaPlay } from "react-icons/ti";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome className="w-5 h-5" />,
        label: "Home",
        href: "/",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <GrUserManager className="w-5 h-5" />,
        label: "Management",
        href: "/list/management",
        visible: ["admin", "management"],
      },
      {
        icon: <GrGroup className="w-5 h-5" />,
        label: "Employees",
        href: "/list/employees",
        visible: ["admin", "management"],
      },
      {
        icon: <FaBriefcase className="w-5 h-5" />,
        label: "Hr",
        href: "/hr",
        visible: ["admin", "management"],
      },
      {
        icon: <MdComputer className="w-5 h-5" />,
        label: "IT",
        href: "/it",
        visible: ["admin", "management"],
      },
      {
        icon: <FaUsers className="w-5 h-5" />,
        label: "Projects",
        href: "/list/projects",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <BiCalendar className="w-5 h-5" />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <BsClock className="w-5 h-5" />,
        label: "Leave",
        href: "/list/leaves",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <BiMessage className="w-5 h-5" />,
        label: "Messages",
        href: "/messages",
        visible: ["admin", "management", "employees"],
      },
      {
        icon: <GrAnnounce className="w-5 h-5" />,
        label: "Announcement",
        href: "/list/announcements",
        visible: ["admin", "management", "employees", "hr"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile className="w-5 h-5" />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <FcSettings className="w-5 h-5" />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "management", "employees", "hr"],
      },
      {
        icon: <BiLogOut className="w-5 h-5" />,
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
          <span className="hidden lg:block text-gray-400 font-semibold my-4">
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
                <span className="w-5 h-5 flex items-center justify-center">
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
