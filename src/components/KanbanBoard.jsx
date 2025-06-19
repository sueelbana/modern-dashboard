import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";

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
  "To-do": [
    {
      id: "1",
      title: "Design",
      desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    },
    {
      id: "2",
      title: "Development",
      desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    },
  ],
  "In-Progress": [
    {
      id: "3",
      title: "Design",
      desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    },
  ],
  Completed: [
    {
      id: "4",
      title: "Research",
      desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    },
    {
      id: "5",
      title: "Development",
      desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    },
  ],
  Review: [
    {
      id: "6",
      title: "Design",
      desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    },
    {
      id: "7",
      title: "Research",
      desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    },
  ],
  Revision: [],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialData);

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
        {Object.entries(columns).map(([title, items]) => (
          <SortableContext
            key={title}
            items={items}
            strategy={verticalListSortingStrategy}
          >
            <KanbanColumn title={title} items={items} />
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
