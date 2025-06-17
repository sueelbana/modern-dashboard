import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const MarketCard = ({ title, price, data, strokeColor, gradientId, isUp }) => {
  return (
    <div className="bg-bg border border-border rounded-xl p-4 w-full max-w-[200px] min-w-[170px]">
      {/* Title */}
      <div className="text-xs text-text font-medium mb-1">
        {title} <span className="mx-1">↔</span> USD
      </div>

      {/* Price + Change */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-bold text-text">${price}</span>
        {isUp ? (
          <FaArrowUp className="text-green-500 text-sm" />
        ) : (
          <FaArrowDown className="text-red-500 text-sm" />
        )}
      </div>

      {/* Zigzag Area Chart */}
      <div className="h-16 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`gradient-${gradientId}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={strokeColor} stopOpacity={0.3} />
                <stop offset="100%" stopColor={strokeColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="linear" // ✅ Use linear for zigzag
              dataKey="value"
              stroke={strokeColor}
              strokeWidth={3}
              fill={`url(#gradient-${gradientId})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketCard;
