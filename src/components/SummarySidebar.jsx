import React from "react";
import SummaryChart from "./SummaryChart";
import ProfitExpenseSection from "./ProfitExpenseSection";
import RecentTradingList from "./RecentTradingList";

const SummarySidebar = () => {
  return (
    <div className="w-68 p-4 space-y-6">
      <SummaryChart />
      <ProfitExpenseSection />
      <RecentTradingList />
    </div>
  );
};

export default SummarySidebar;
