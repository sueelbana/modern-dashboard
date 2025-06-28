import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const incomeData = [
  { name: "Mon", value: 100 },
  { name: "Tue", value: 180 },
  { name: "Wed", value: 160 },
  { name: "Thu", value: 100 },
  { name: "Fri", value: 170 },
  { name: "Sat", value: 20 },
  { name: "Sun", value: 40 },
];

const expenseData = [
  { name: "Mon", value: 100 },
  { name: "Tue", value: 150 },
  { name: "Wed", value: 30 },
  { name: "Thu", value: 100 },
  { name: "Fri", value: 100 },
  { name: "Sat", value: 90 },
  { name: "Sun", value: 160 },
];

const ProfitsCard = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-bg border border-border rounded-xl p-6 space-y-4 shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-text">
          {t("profits.title")}
        </h3>
        <button className="flex items-center gap-1 px-3 py-1 text-sm bg-transparent text-blue-800 font-bold border border-border rounded">
          {t("profits.range")} <IoChevronDownSharp />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={incomeData}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            fill="url(#incomeGradient)"
            strokeWidth={2}
            dot
          />
          <Line
            type="monotone"
            data={expenseData}
            dataKey="value"
            stroke="#facc15"
            strokeWidth={2}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            <FaArrowUp />
          </div>
          <div>
            <p className="text-xs text-text">{t("profits.income")}</p>
            <p className="font-bold text-text">$12,890.00</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white">
            <FaArrowDown />
          </div>
          <div>
            <p className="text-xs text-text">{t("profits.expense")}</p>
            <p className="font-bold text-text">$12,890.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitsCard;
