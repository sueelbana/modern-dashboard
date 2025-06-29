import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTranslation } from "react-i18next";

const data = [
  { name: "Jan", value: 240 },
  { name: "Feb", value: 120 },
  { name: "Mar", value: 180 },
  { name: "Apr", value: 160 },
  { name: "May", value: 170 },
  { name: "Jun", value: 260 },
  { name: "Jul", value: 240 },
  { name: "Aug", value: 130 },
  { name: "Sep", value: 190 },
  { name: "Oct", value: 160 },
  { name: "Nov", value: 170 },
  { name: "Dec", value: 300 },
];

const highlightIndex = 5;

export default function CustomersBarChart() {
  const { t } = useTranslation();
  const [period, setPeriod] = useState("month");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => document.documentElement.classList.contains("dark");

    setIsDark(checkDark());

    const observer = new MutationObserver(() => setIsDark(checkDark()));

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const getBarColor = (index) => {
    if (index === highlightIndex) return "#6C5DD3";
    return isDark ? "rgba(46, 41, 62, 1)" : "rgba(236, 238, 251, 1)";
  };

  return (
    <div className="bg-bg p-4 rounded-xl border border-border shadow-sm w-full">
      <div className="w-full border-b border-border pb-3 mb-3">
        <div className="grid grid-cols-4 text-sm text-text-secondary">
          <div>
            <div>{t("customers.total")}</div>
            <div className="text-lg font-bold text-text">345,678</div>
          </div>
          <div>
            <div>{t("customers.new")}</div>
            <div className="text-lg font-bold text-green-500 flex items-center gap-1">
              49 <HiArrowUp className="text-green-500 text-base" />
            </div>
          </div>
          <div>
            <div>{t("customers.growth")}</div>
            <div className="text-lg font-bold text-text">+10%</div>
          </div>
          <div className="flex flex-col items-end justify-end">
            <label
              htmlFor="period-select"
              className="mb-1 text-sm text-text-secondary"
            >
              {t("customers.period")}
            </label>
            <select
              id="period-select"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="bg-bg border border-border rounded px-2 py-1 text-sm font-bold text-text focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="month">{t("customers.periods.month")}</option>
              <option value="quarter">{t("customers.periods.quarter")}</option>
              <option value="year">{t("customers.periods.year")}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={30}>
              {data.map((_, index) => (
                <Cell key={index} fill={getBarColor(index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="absolute -top-0 left-[45%] w-3 h-3 bg-white border-4 border-[#6C5DD3] rounded-full z-10" />
      </div>
    </div>
  );
}
