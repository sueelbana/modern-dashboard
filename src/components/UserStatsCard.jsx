import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";

const pieData = [
  { name: "male", value: 100, color: "#6C5DD3" },
  { name: "female", value: 50, color: "#FBBF24" },
  { name: "other", value: 50, color: "#FB923C" },
];

const lineData = [
  { x: 0, thisWeek: 40, lastWeek: 20 },
  { x: 20, thisWeek: 30, lastWeek: 25 },
  { x: 40, thisWeek: 50, lastWeek: 30 },
  { x: 60, thisWeek: 60, lastWeek: 50 },
  { x: 80, thisWeek: 45, lastWeek: 60 },
  { x: 100, thisWeek: 70, lastWeek: 40 },
  { x: 120, thisWeek: 60, lastWeek: 35 },
];

const barData = [
  { name: "", value: 30 },
  { name: "", value: 10 },
  { name: "", value: 50 },
  { name: "", value: 40 },
  { name: "", value: 60 },
  { name: "", value: 20 },
];

export default function UserStatsCard() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-10">
      {/* Pie section */}
      <div className="bg-bg p-4 rounded-xl shadow-sm border border-border w-[250px]">
        <h3 className="text-md font-semibold mb-4 text-text">
          {t("userstats.profile")}
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2 text-sm">
          {pieData.map((entry, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                {t(`userstats.gender.${entry.name}`)}
              </div>
              <div className="font-bold text-text">{entry.value}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Line & bar section */}
      <div className="col-span-2 bg-bg p-6 rounded-xl shadow-sm border border-border w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <h3 className="text-md font-semibold mb-4 text-text">
              {t("userstats.statistic")}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="x" tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="thisWeek"
                  stroke="#6C5DD3"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="lastWeek"
                  stroke="#FBBF24"
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-4 text-text">
              {t("userstats.weekly")}
            </h3>
            <div className="mb-4 space-y-2 text-sm">
              <div className="flex justify-between font-medium">
                <span className="text-text-secondary">
                  {t("userstats.this_week")}
                </span>
                <span className="text-[#6C5DD3] font-bold">+ 20%</span>
              </div>
              <div className="flex justify-between font-medium">
                <span className="text-text-secondary">
                  {t("userstats.last_week")}
                </span>
                <span className="text-[#FBBF24] font-bold">+ 13%</span>
              </div>
            </div>

            <h4 className="text-sm font-semibold mt-4 mb-1 text-text">
              {t("userstats.impression")}
            </h4>
            <ResponsiveContainer width="110%" height={100}>
              <BarChart data={barData} barCategoryGap={10}>
                <Bar
                  dataKey="value"
                  fill="#6C5DD3"
                  radius={[4, 4, 0, 0]}
                  barSize={16}
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-between text-sm mt-2">
              <span className="font-bold text-text">12.345</span>
              <span className="text-green-500 text-xs">
                5.4% {t("userstats.than_last_year")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
