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
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        {/* Logo & Title */}

        <Link 
        href="/" 
        className="flex items-center justify-center lg:justify-start gap-2"
        >

          <Image src="/assets/rocksalt.jpg" alt="logo" width={50} height={50} />
          <span className=" text-lg font-bold whitespace-nowrap">RS  System</span>
        </Link>
        {/* Menu Section */}
      
          <Menu />
        </div>
      

      {/* RIGHT Content Area */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        {/* Navbar at the Top Right */}
       
          <Navbar />
        {children}

        {/* Main Content */}
      </div>
    </div>
  );
}
