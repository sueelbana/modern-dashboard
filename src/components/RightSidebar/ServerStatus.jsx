import React from "react";
import { FaCaretUp } from "react-icons/fa";

const ServerStatus = () => {
  // Mock data for vertical bars
  const bars = new Array(50).fill(0).map(() =>
    Math.floor(Math.random() * 40) + 10
  );

  return (
    <div className="mb-6 px-3 pt-2">
      <h3 className="font-semibold text-text mb-3">Server Status</h3>

      {/* Bar chart */}
      <div className="flex items-end h-28 mb-3 space-x-[3px]">
        {bars.map((height, i) => (
          <div
            key={i}
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
