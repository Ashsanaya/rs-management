import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Menu from "../components/menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT Sidebar*/}
      <div className="w-[16%] p-4 bg-white shadow-md flex flex-col">
        {/* Logo & Title */}

        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/rocksalt.jpg" alt="logo" width={50} height={50} />
          <span className=" text-lg font-bold whitespace-nowrap">RS Management System</span>
        </Link>
        {/* Menu Section */}
        <div className="mt-6">
          <Menu />
        </div>
      </div>

      {/* RIGHT Content Area */}
      <div className="w-[84%] bg-blue-200 overflow-scroll flex flex-col">
        {/* Navbar at the Top Right */}
        <div className="w-full p-4 flex justify-end bg-white shadow-md">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
}
