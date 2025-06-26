import React from "react";
import KanbanCard from "./KanbanCard";
import { useTranslation } from "react-i18next";

const KanbanColumn = ({ titleKey, items }) => {
  const { t } = useTranslation();

  return (
    <div className="w-64 bg-border p-4 rounded-xl shadow-sm">
      {/* Column Header with Ellipsis */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-text">{t(titleKey)}</h3>
        <button className="text-gray-400 hover:text-gray-600 text-xl">⋯</button>
      </div>

      {/* Add Card Button */}
      <button className="bg-indigo-500 text-white w-full py-1.5 text-sm rounded hover:bg-indigo-600 mb-4">
        + {t("kanban.addCard")}
      </button>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <KanbanCard
            key={item.id}
            id={item.id}
            titleKey={item.titleKey}
            descKey={item.descKey}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
