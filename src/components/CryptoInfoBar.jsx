import React from "react";
import { FaBitcoin, FaPlusCircle, FaEllipsisH } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const CryptoInfoBar = () => {
  return (
    <div className="inline-flex items-center h-[100px] text-lg px-4 bg-bg rounded-xl shadow border border-border font-medium divide-x divide-border">
      <div className="flex items-center h-full divide-x divide-border">
        {/* Token */}
        <button className="flex items-center text-text px-4 space-x-2 text-lg w-40 h-full">
          <FaBitcoin className="text-purple-700" />
          <span>Bitcoin</span>
          <FiChevronDown className="text-gray-500" />
        </button>

        {/* Timer & Interval */}
        <button className="flex items-center px-4 font-bold text-text text-lg space-x-2 w-40 h-full">
          <span>1h 30m 1s</span>
          <span className="text-purple-700">D</span>
          <FiChevronDown className="text-gray-500" />
        </button>

        {/* Price and Change */}
        <div className="flex items-center px-4 space-x-2 text-text font-bold text-lg w-40 h-full">
          <span>480.2</span>
          <span className="text-red-500 text-xs font-semibold">+5.5%</span>
        </div>

        {/* Rate */}
        <div className="flex items-center px-4 font-bold text-text text-lg w-40 h-full">
          <span>-0.0662%/hr</span>
        </div>

        {/* Compare */}
        <button className="flex items-center px-4 space-x-1 text-text cursor-pointer text-lg hover:underline w-40 h-full">
          <FaPlusCircle />
          <span>Compare</span>
        </button>

        {/* Options */}
        <button className="flex items-center px-4 text-gray-500 text-xl cursor-pointer w-40 h-full">
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
};

export default CryptoInfoBar;
