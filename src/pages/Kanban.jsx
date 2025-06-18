import React from "react";
import KanbanHeader from "../components/KanbanHeader";
import KanbanBoard from "../components/KanbanBoard";

const Kanban = () => {
  return (
    <div className="p-6 bg-bg min-h-screen">
      <h1 className="text-2xl font-semibold text-text mb-4">Kanban</h1>
      <KanbanHeader />
      <KanbanBoard />
    </div>
  );
};

export default Kanban;
