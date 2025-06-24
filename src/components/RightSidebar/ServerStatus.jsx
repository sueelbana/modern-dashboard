import React from "react";
import { FaCaretUp } from "react-icons/fa";

const ServerStatus = () => {
  // 50 bars with #17, #19, #20 very high
  const barHeights = [
    20,
    28,
    18,
    32,
    25,
    10,
    38,
    40,
    50,
    45, // 1–10
    12,
    6,
    24,
    10,
    30,
    28, // 11–16
    100, // 17 - very tall
    16, // 18 - normal
    90, // 19 - very tall
    85, // 20 - very tall
    50,
    42,
    38,
    36,
    44,
    18,
    14,
    20,
    28,
    40, // 21–30
    10,
    12,
    16,
    30,
    18,
    10,
    24,
    40,
    38,
    36, // 31–40
    20,
    16,
    12,
    32,
    44,
    18,
    24,
    40,
    30,
    12, // 41–50
  ];

  return (
    <div className="p-4 bg-transparent">
      <h3 className="text-lg font-bold text-text mb-4">Server Status</h3>

      <div className="flex items-end justify-between h-28 mb-6">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="w-[2px] bg-indigo-500"
            style={{ height: `${height}px` }}
          ></div>
        ))}
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-3 text-center text-xs">
        <div>
          <p className="text-text-secondary">Country</p>
          <p className="font-medium text-text">Indonesia</p>
        </div>
        <div>
          <p className="text-text-secondary">Domain</p>
          <p className="font-medium text-text">website.com</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-text-secondary">Speed</p>
          <p className="flex items-center gap-1 font-medium text-text">
            <FaCaretUp className="text-text text-sm" /> 2.0 mbps
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServerStatus;
