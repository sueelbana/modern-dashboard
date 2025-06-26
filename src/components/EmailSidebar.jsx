import React from "react";
import { useTranslation } from "react-i18next";
import { FaInbox, FaPlusCircle } from "react-icons/fa";
import {
  MdSend,
  MdStar,
  MdEdit,
  MdLabelImportant,
  MdSchedule,
  MdExpandMore,
} from "react-icons/md";

const EmailSidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="w-64">
      {/* Title */}
      <h2 className="text-xl font-semibold text-text mb-4">
        {t("email.title")}
      </h2>

      <div className="border border-border rounded-lg p-4 shadow-sm space-y-6 bg-bg">
        {/* New Mail */}
        <button className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/90 transition">
          {t("email.new_mail_button")}
        </button>

        {/* Folder Buttons */}
        <div className="space-y-2">
          <button className="flex items-center justify-between w-full bg-primary/10 text-primary font-medium py-2 px-3 rounded-md hover:bg-primary/20">
            <span className="flex items-center gap-2">
              <FaInbox />
              {t("email.folders.inbox")}
            </span>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </button>

          <button
            className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition"
            disabled
          >
            <MdSend />
            {t("email.folders.sent")}
          </button>

          <button
            className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition"
            disabled
          >
            <MdStar />
            {t("email.folders.favorite")}
          </button>

          <button
            className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition"
            disabled
          >
            <MdEdit />
            {t("email.folders.draft")}
          </button>

          <button
            className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition"
            disabled
          >
            <MdLabelImportant />
            {t("email.folders.important")}
          </button>

          <button
            className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition"
            disabled
          >
            <MdSchedule />
            {t("email.folders.scheduled")}
          </button>

          <button
            className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition"
            disabled
          >
            <MdExpandMore />
            {t("email.folders.more")}
          </button>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-text mb-2">
            {t("email.categories.title")}
          </h3>

          <button className="flex items-center gap-2 w-full py-2 px-3 rounded-md text-text hover:bg-gray-400 transition">
            <span className="w-4 h-4 rounded-full bg-yellow-400" />
            {t("email.categories.work")}
          </button>

          <button className="flex items-center gap-2 w-full py-2 px-3 rounded-md text-text hover:bg-gray-400 transition">
            <span className="w-4 h-4 rounded-full bg-red-400" />
            {t("email.categories.side_projects")}
          </button>

          <button className="flex items-center gap-2 w-full py-2 px-3 text-text font-medium hover:underline">
            <FaPlusCircle />
            {t("email.categories.add")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSidebar;
