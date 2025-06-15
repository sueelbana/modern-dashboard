import React from "react";
import { FaBriefcase, FaFolder, FaDollarSign, FaCubes } from "react-icons/fa";
import VisitorsCard from "./VisitorsCard";
import CustomersBarChart from "./CustomersBarChart";
import UserStatsCard from "./UserStatsCard";
import UserReviews from "./UserReviews";

const Card = ({ icon, label, value, iconColor }) => (
  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-white">
    <div className="flex items-center space-x-2">
      <div className={`text-xl ${iconColor}`}>{icon}</div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
    </div>
    <div className="text-lg font-bold text-gray-900">{value}</div>
  </div>
);

const DashboardSummary = () => {
  return (
    <div className="p-6 bg-bg min-h-screen">
      <h2 className="text-xl font-bold mb-5 text-black">Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="grid grid-cols-2 gap-6 col-span-2">
          <Card
            icon={<FaBriefcase />}
            label="Projects"
            value="932"
            iconColor="text-blue-600"
          />
          <Card
            icon={<FaFolder />}
            label="Side Projects"
            value="932"
            iconColor="text-yellow-500"
          />
          <Card
            icon={<FaDollarSign />}
            label="Investment"
            value="932"
            iconColor="text-orange-500"
          />
          <Card
            icon={<FaCubes />}
            label="Assets"
            value="932"
            iconColor="text-sky-500"
          />
        </div>

        {/* Visitors card fills third column */}
        <div className="w-full">
          <VisitorsCard />
        </div>
      </div>

      <div className="mt-6 w-full">
        <CustomersBarChart />
      </div>

      <div className="mt-6">
        <UserStatsCard />
      </div>

      <div className="mt-6">
        <UserReviews />
      </div>
    </div>
  );
};

export default DashboardSummary;
