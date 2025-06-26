import React from "react";
import { useTranslation } from "react-i18next";
import { FaStar, FaLock, FaPlus, FaEllipsisH } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const KanbanHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="bg-bg border border-border rounded-lg p-4 flex justify-between items-center shadow-sm">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <h3 className="font-semibold text-text text-lg">
            {t("kanban.project")}
          </h3>
          <h3 className="font-semibold text-text text-lg">
            {t("kanban.board")}
          </h3>

          {/* Star Button */}
          <button className="px-4 py-2 bg-hover rounded-md text-gray-400 text-lg flex items-center justify-center">
            <FaStar />
          </button>

          {/* Board Dropdown */}
          <button className="flex items-center gap-2 px-4 py-2 bg-hover text-indigo-600 font-bold rounded-md text-base">
            {t("kanban.board")} <IoChevronDownSharp className="text-sm" />
          </button>

          {/* Private Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-hover text-indigo-600 rounded-md text-base font-medium">
            <FaLock className="text-sm" /> {t("kanban.private")}
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-purple-300"></div>
          <div className="w-8 h-8 rounded bg-purple-300"></div>
          <div className="w-8 h-8 rounded bg-purple-300"></div>

          <div className="px-2 h-8 w-8 rounded bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">
            5+
          </div>

          <button className="w-8 h-8 rounded bg-indigo-600 text-white flex items-center justify-center">
            <FaPlus className="text-sm" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center text-gray-500">
            <FaEllipsisH className="text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanHeader;
