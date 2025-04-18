import UserCard from "@/app/components/UserCard";
import CountChart from "@/app/components/CountChart";
import FinanceChart from "@/app/components/FinanceChart";
import AttendanceChart from "@/app/components/AttendanceChart";
import EventCalendar from "@/app/components/EventCalendar";
import Announcements from "@/app/components/Announcements";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="employees" />
          <UserCard type="management" />
          <UserCard type="HR" />
          <UserCard type="IT" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHARTS */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDENCE CHART */}

          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}

        <FinanceChart />
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
