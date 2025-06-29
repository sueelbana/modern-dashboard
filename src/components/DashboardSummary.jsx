import React from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaFolder, FaDollarSign, FaCubes } from "react-icons/fa";
import VisitorsCard from "./VisitorsCard";
import CustomersBarChart from "./CustomersBarChart";
import UserStatsCard from "./UserStatsCard";
import UserReviews from "./UserReviews";

const Card = ({ icon, label, value, iconColor }) => (
  <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-bg">
    <div className="flex items-center space-x-2">
      <div className={`text-xl ${iconColor}`}>{icon}</div>
      <div className="text-sm font-medium text-text">{label}</div>
    </div>
    <div className="text-lg font-bold text-text">{value}</div>
  </div>
);

const DashboardSummary = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-bg w-full min-h-[calc(100vh-4rem)]">
      <h2 className="text-xl font-bold mb-5 text-text">
        {t("dashboard.title")}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="grid grid-cols-2 gap-6 col-span-2">
          <Card
            icon={<FaBriefcase />}
            label={t("dashboard.projects")}
            value="932"
            iconColor="text-blue-600"
          />
          <Card
            icon={<FaFolder />}
            label={t("dashboard.side_projects")}
            value="932"
            iconColor="text-yellow-500"
          />
          <Card
            icon={<FaDollarSign />}
            label={t("dashboard.investment")}
            value="932"
            iconColor="text-orange-500"
          />
          <Card
            icon={<FaCubes />}
            label={t("dashboard.assets")}
            value="932"
            iconColor="text-sky-500"
          />
        </div>

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
