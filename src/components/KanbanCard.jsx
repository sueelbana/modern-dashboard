import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaPaperclip } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const KanbanCard = ({ id, titleKey, descKey }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  const { t } = useTranslation();

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-bg p-3 rounded-lg shadow text-sm cursor-grab"
    >
      {/* Title with colored dot */}
      <div className="flex items-center gap-2 mb-1">
        <span className="h-2 w-2 rounded-full bg-blue-500" />
        <strong className="text-text">{t(titleKey)}</strong>
      </div>

      <p className="text-text-secondary text-xs">{t(descKey)}</p>

      {/* Paperclip icon aligned right */}
      <div className="mt-2 flex justify-end">
        <FaPaperclip className="text-gray-400 text-xl" />
      </div>
    </div>
  );
};

export default KanbanCard;
