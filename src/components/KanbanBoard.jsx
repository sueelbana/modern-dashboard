import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import { useTranslation } from "react-i18next";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const initialData = {
  todo: [
    {
      id: "1",
      titleKey: "kanbanCard.title1",
      descKey: "kanbanCard.desc1",
    },
    {
      id: "2",
      titleKey: "kanbanCard.title2",
      descKey: "kanbanCard.desc2",
    },
  ],
  inProgress: [
    {
      id: "3",
      titleKey: "kanbanCard.title3",
      descKey: "kanbanCard.desc3",
    },
  ],
  completed: [
    {
      id: "4",
      titleKey: "kanbanCard.title4",
      descKey: "kanbanCard.desc4",
    },
    {
      id: "5",
      titleKey: "kanbanCard.title5",
      descKey: "kanbanCard.desc5",
    },
  ],
  review: [
    {
      id: "6",
      titleKey: "kanbanCard.title6",
      descKey: "kanbanCard.desc6",
    },
    {
      id: "7",
      titleKey: "kanbanCard.title7",
      descKey: "kanbanCard.desc7",
    },
  ],
  revision: [],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialData);
  const { t } = useTranslation();

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    let sourceColumnId, targetColumnId;

    for (const col in columns) {
      if (columns[col].find((card) => card.id === active.id)) {
        sourceColumnId = col;
      }
      if (columns[col].find((card) => card.id === over.id)) {
        targetColumnId = col;
      }
    }

    if (!sourceColumnId || !targetColumnId) return;

    const sourceItems = [...columns[sourceColumnId]];
    const targetItems = [...columns[targetColumnId]];

    const draggedCard = sourceItems.find((card) => card.id === active.id);
    const newSourceItems = sourceItems.filter((card) => card.id !== active.id);
    const insertIndex = targetItems.findIndex((card) => card.id === over.id);

    targetItems.splice(insertIndex, 0, draggedCard);

    setColumns({
      ...columns,
      [sourceColumnId]: newSourceItems,
      [targetColumnId]: targetItems,
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex overflow-x-auto gap-6 p-4">
        {Object.entries(columns).map(([key, items]) => (
          <SortableContext
            key={key}
            items={items}
            strategy={verticalListSortingStrategy}
          >
            <KanbanColumn title={t(`kanban.${key}`)} items={items} />
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
