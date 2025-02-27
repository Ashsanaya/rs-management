import UserCard from "@/app/components/UserCard";
import CountChart from "@/app/components/CountChart";
import AttendenceChart from "@/app/components/AttendenceChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type ="employees"/>
            <UserCard type ="management"/>
            <UserCard type ="HR"/>
            <UserCard type ="IT"/>
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>
          </div>
          {/* ATTENDENCE CHART */}
          
          <div className="w-full lg:w-2/3 h-[450px]">
          <AttendenceChart/>
          </div>
          </div>
          {/* BOTTOM CHART */}
          <div className=""></div>
      </div>
      {/* RIGHT */}
    <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
