import React from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import DashboardSummary from "./components/DashboardSummary";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  return (
    <div className="flex h-screen bg-bg overflow-hidden">
      {/* Left Sidebar (Icon-based) */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar />
        <div className="flex flex-1 overflow-hidden">
          {/* Dashboard content */}
          <div className="flex-1 overflow-y-auto p-6">
            <DashboardSummary />
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
