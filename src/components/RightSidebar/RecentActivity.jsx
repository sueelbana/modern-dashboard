import React from "react";
import { useTranslation } from "react-i18next";

const colorMap = ["bg-indigo-500", "bg-black", "bg-yellow-500", "bg-pink-300"];

const RecentActivity = () => {
  const { t } = useTranslation();
  // Pull the array of items from your translation JSON
  const items = t("recentActivity.items", { returnObjects: true });

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-text">{t("recentActivity.title")}</h3>
      </div>

      <div className="flex space-x-2 mb-4">
        <button className="text-xs bg-indigo-500 text-white px-3 py-1 rounded-full">
          {t("recentActivity.buttons.activity")}
        </button>
        <button className="text-xs bg-text-secondary text-white px-3 py-1 rounded-full">
          {t("recentActivity.buttons.update")}
        </button>
      </div>

      <ul className="space-y-3 text-xs text-text">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className={`w-7 h-5 rounded ${colorMap[index]}`} />
            <div className="flex justify-between w-full">
              <span>{item.label}</span>
              <span className="text-gray-400">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
