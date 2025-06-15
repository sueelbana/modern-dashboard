import React, { useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

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
  const [period, setPeriod] = useState("Month");

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm w-[66%]">
      <div className="grid grid-cols-4 border-b pb-3 mb-3 text-sm text-gray-700 font-semibold">
        <div>
          <div>Total Customers</div>
          <div className="text-lg font-bold text-black">345,678</div>
        </div>
        <div>
          <div>New User</div>
          <div className="text-lg font-bold text-green-500 flex items-center gap-1">
            49 <HiArrowUp className="text-green-500 text-base" />
          </div>
        </div>
        <div>
          <div>Growth</div>
          <div className="text-lg font-bold text-black">+10%</div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <label htmlFor="period-select" className="mb-1 text-sm text-gray-700">
            Period
          </label>
          <select
            id="period-select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="bg-white border border-gray-300 rounded px-2 py-1 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="Month">Month</option>
            <option value="Quarter">Quarter</option>
            <option value="Year">Year</option>
          </select>
        </div>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === highlightIndex ? "#6C5DD3" : "#E9E9F0"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="absolute -top-0 left-[45%] w-3 h-3 bg-white border-4 border-[#6C5DD3] rounded-full z-10" />
      </div>
    </div>
  );
}
