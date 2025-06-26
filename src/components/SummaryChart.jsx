import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useTranslation } from "react-i18next";

const rawData = [
  { code: "ethereum", value: 30, color: "#facc15" },
  { code: "litecoin", value: 34, color: "#fb7185" },
  { code: "ripple", value: 6, color: "#0ea5e9" },
  { code: "bitcoin", value: 30, color: "#6366f1" },
];

export default function SummaryChart() {
  const { t } = useTranslation();

  // translate the `code` into a display name
  const pieData = rawData.map((entry) => ({
    ...entry,
    name: t(`currencies.${entry.code}`),
  }));

  return (
    <div>
      <h3 className="font-semibold text-text mb-4">{t("summary.title")}</h3>
      <div className="flex items-center justify-center gap-4">
        <PieChart width={140} height={140}>
          <Pie
            data={pieData}
            dataKey="value"
            outerRadius={60}
            innerRadius={35}
            paddingAngle={2}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="space-y-2 text-sm text-text">
          {pieData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: entry.color }}
              />
              <span>{entry.name}</span>
              <span className="text-xs font-medium ml-1">
                {t("summary.percent", { value: entry.value })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
