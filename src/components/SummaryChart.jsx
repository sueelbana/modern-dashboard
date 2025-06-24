import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const pieData = [
  { name: "Ethereum", value: 30, color: "#facc15" },
  { name: "Litecoin", value: 34, color: "#fb7185" },
  { name: "Ripple", value: 6, color: "#0ea5e9" },
  { name: "Bitcoin", value: 30, color: "#6366f1" },
];

const SummaryChart = () => {
  return (
    <div>
      <h3 className="font-semibold text-text mb-4">Summary</h3>
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
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="space-y-2 text-sm text-text">
          {pieData.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: entry.color }}
              ></div>
              <span>{entry.name}</span>
              <span className="text-xs font-medium ml-1">{entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryChart;
