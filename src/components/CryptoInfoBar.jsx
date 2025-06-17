import React from "react";
import { FaBitcoin, FaPlusCircle, FaEllipsisH } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const CryptoInfoBar = () => {
  return (
  <div className="inline-flex items-center h-[100px] text-lg px-4 bg-white dark:bg-[#1e192a] rounded-xl shadow  font-medium divide-x divide-gray-200 dark:divide-gray-700">
      <div className="flex items-center h-full divide-x divide-gray-200 dark:divide-gray-700">
        {/* Token */}
        <button className="flex items-center px-4 space-x-2 text-lg w-40 h-full hover:bg-gray-100 dark:hover:bg-[#2b253a]">
          <FaBitcoin className="text-purple-700" />
          <span>Bitcoin</span>
          <FiChevronDown className="text-gray-500" />
        </button>

        {/* Timer & Interval */}
        <button className="flex items-center px-4 font-bold text-lg space-x-2 w-40 h-full hover:bg-gray-100 dark:hover:bg-[#2b253a]">
          <span>1h 30m 1s</span>
          <span className="text-purple-700">D</span>
          <FiChevronDown className="text-gray-500" />
        </button>

        {/* Price and Change */}
        <div className="flex items-center px-4 space-x-2 font-bold text-lg w-40 h-full">
          <span>480.2</span>
          <span className="text-red-500 text-xs font-semibold">+5.5%</span>
        </div>

        {/* Rate */}
        <div className="flex items-center px-4 font-bold text-lg w-40 h-full">
          <span>-0.0662%/hr</span>
        </div>

        {/* Compare */}
        <button className="flex items-center px-4 space-x-1 cursor-pointer text-lg hover:underline w-40 h-full hover:bg-gray-100 dark:hover:bg-[#2b253a]">
          <FaPlusCircle />
          <span>Compare</span>
        </button>

        {/* Options */}
        <button className="flex items-center px-4 text-gray-500 text-xl cursor-pointer w-40 h-full hover:bg-gray-100 dark:hover:bg-[#2b253a]">
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
};

export default CryptoInfoBar;
