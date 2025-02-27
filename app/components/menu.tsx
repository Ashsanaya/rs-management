import Link from "next/link";
import { FaHome, FaUserCog, FaUsers, FaBriefcase } from "react-icons/fa";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome />,
        label: "Home",
        href: "/",
      },
      {
        icon: <FaUserCog />,
        label: "Management",
        href: "/management",
      },
      {
        icon: <FaUsers />,
        label: "Employees",
        href: "/employees",
      },
      {
        icon: <FaBriefcase />,
        label: "Hr",
        href: "/hr",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-md">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className=" text-Blue-400 font-bold my-4">{i.title}</span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-3 text-gray-600 py-2 hover:text-blue-400 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
      
    </div>
  );
};

export default Menu;
