import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-bg overflow-hidden">
      {/* Sidebar stays on all pages */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar />

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            {/* Page content will render here */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
