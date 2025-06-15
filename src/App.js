import React from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import DashboardSummary from "./components/DashboardSummary";

function App() {
  return (
    <div className="flex h-screen bg-bg">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-bg overflow-hidden">
        <TopNavbar />
        <div className="flex-1 overflow-y-auto">
          <DashboardSummary />
        </div>
      </div>
    </div>
  );
}

export default App;
