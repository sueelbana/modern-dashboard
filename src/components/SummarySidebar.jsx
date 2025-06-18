import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis } from "recharts";
import { FaArrowDown, FaArrowUp, FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiRipple } from "react-icons/si";

const pieData = [
  { name: "Ethereum", value: 30, color: "#facc15" },
  { name: "Litecoin", value: 34, color: "#fb7185" },
  { name: "Ripple", value: 6, color: "#0ea5e9" },
  { name: "Bitcoin", value: 30, color: "#6366f1" },
];

const profitData = [
  { name: "M", value: 3 },
  { name: "T", value: 5 },
  { name: "W", value: 7 },
  { name: "T", value: 10 },
  { name: "F", value: 6 },
];

const expenseData = [
  { name: "M", value: 6 },
  { name: "T", value: 9 },
  { name: "W", value: 4 },
  { name: "T", value: 8 },
  { name: "F", value: 5 },
];

const SummarySidebar = () => {
  return (
    <div className="w-80 bg-bg border-l border-border p-4 space-y-6">
      {/* Summary with Pie Chart */}
      <div>
        <h3 className="font-semibold text-text mb-4">Summary</h3>
        <div className="flex items-center justify-center gap-4">
          {/* Pie Chart */}
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

          {/* Pie Labels */}
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

      {/* Profit and Expense */}
      <div>
        <h3 className="font-semibold text-text mb-2">Profit</h3>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="bg-black p-2 rounded-full">
              <FaArrowUp className="text-green-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-text">$120.455</p>
              <p className="text-xs text-gray-500">Income</p>
            </div>
          </div>
          <BarChart width={80} height={40} data={profitData}>
            <Bar dataKey="value" fill="#6366f1" radius={4} barSize={6} />
          </BarChart>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-black p-2 rounded-full">
              <FaArrowDown className="text-red-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-text">$86.455</p>
              <p className="text-xs text-gray-500">Expense</p>
            </div>
          </div>
          <BarChart width={80} height={40} data={expenseData}>
            <Bar dataKey="value" fill="#fb7185" radius={4} barSize={6} />
          </BarChart>
        </div>
      </div>

      {/* Recent Trading */}
      <div>
        <h3 className="font-semibold text-text mb-4">Recent Trading</h3>
        <ul className="space-y-4 text-sm">
          {[
            {
              name: "Bitcoin",
              symbol: "BTC",
              icon: <FaBitcoin className="text-white" />,
              bg: "bg-purple-600",
            },
            {
              name: "Ethereum",
              symbol: "ETH",
              icon: <FaEthereum className="text-white" />,
              bg: "bg-yellow-500",
            },
            {
              name: "Litecoin",
              symbol: "LTC",
              icon: <SiLitecoin className="text-white" />,
              bg: "bg-red-400",
            },
            {
              name: "Ripplecoin",
              symbol: "RPL",
              icon: <SiRipple className="text-white" />,
              bg: "bg-sky-400",
            },
          ].map((coin, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${coin.bg}`}
                >
                  {coin.icon}
                </div>
                <div>
                  <p className="font-medium text-text">{coin.name}</p>
                  <p className="text-xs text-gray-500">{coin.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-text">$13.90</p>
                <p className="text-xs text-gray-500">Today, 12:30 AM</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummarySidebar;
