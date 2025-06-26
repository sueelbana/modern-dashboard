import React from "react";
import { useTranslation } from "react-i18next";
import KanbanHeader from "../components/KanbanHeader";
import KanbanBoard from "../components/KanbanBoard";

const Kanban = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-bg min-h-screen">
      <h1 className="text-2xl font-semibold text-text mb-4">
        {t("kanban.title")}
      </h1>
      <KanbanHeader />
      <KanbanBoard />
    </div>
  );
};

export default Kanban;
