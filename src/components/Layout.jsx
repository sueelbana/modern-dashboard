import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import TodaySchedule from "./TodaySchedule";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-bg overflow-hidden relative">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar />

        <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 pr-[340px]">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="absolute top-[4rem] right-0 h-[calc(100vh-4rem)] w-[320px] border-l border-border bg-[#F5EFFC] z-10">
        <TodaySchedule />
      </div>
    </div>
  );
};

export default Layout;
