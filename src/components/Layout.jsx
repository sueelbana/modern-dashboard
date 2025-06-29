import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import TodaySchedule from "./TodaySchedule";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {/* Top Navbar */}
        <TopNavbar />

        {/* Main Content with TodaySchedule aside */}
        <div className="flex flex-1 overflow-hidden">
          {/* Scrollable Page Content */}
          <div className="flex-1 overflow-y-auto p-6 pr-[340px]">
            <Outlet />
          </div>
          {/* Sticky TodaySchedule Sidebar */}
          <div className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-[320px] border-l border-border bg-[#F5EFFC] z-10">
            <TodaySchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
