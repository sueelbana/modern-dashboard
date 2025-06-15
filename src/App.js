import React from "react";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/TopNavbar";
import DashboardSummary from "./components/DashboardSummary";

function App() {
  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <div className="flex-1">
        <TopNavbar />
        <DashboardSummary />
      </div>
    </div>
  );
}

export default App;
