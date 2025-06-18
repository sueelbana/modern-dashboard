import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", thisMonth: 7000, lastMonth: 4000 },
  { name: "Feb", thisMonth: 4000, lastMonth: 3500 },
  { name: "Mar", thisMonth: 4500, lastMonth: 4000 },
  { name: "Apr", thisMonth: 4500, lastMonth: 2000 },
  { name: "May", thisMonth: 7000, lastMonth: 5500 },
  { name: "Jun", thisMonth: 5000, lastMonth: 4000 },
  { name: "Jul", thisMonth: 7000, lastMonth: 4000 },
  { name: "Aug", thisMonth: 3000, lastMonth: 2500 },
];

const MarketActivity = () => {
  return (
    <div className="bg-bg p-4 rounded-lg border border-border">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-text">Market Activity</h3>
        <button className="text-sm text-text border month-color px-2 py-1 rounded flex items-center gap-1">
          Month <span className="text-xs">▾</span>
        </button>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="thisMonth"
            stroke="#5A45F4"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="lastMonth"
            stroke="#F4C045"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketActivity;
