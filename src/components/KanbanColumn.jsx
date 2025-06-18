import React from "react";
import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ title, items }) => {
  return (
    <div className="w-64 bg-border p-4 rounded-xl shadow-sm">
      {/* Column Header with Ellipsis */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-text">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 text-xl">⋯</button>
      </div>

      {/* Add Card Button (Moved Below Title) */}
      <button className="bg-indigo-500 text-white w-full py-1.5 text-sm rounded hover:bg-indigo-600 mb-4">
        + Add card
      </button>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <KanbanCard
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
