import React from "react";
import { useTranslation } from "react-i18next";

const messages = [
  {
    name: "Samantha William",
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-purple-200",
  },
  {
    name: "Tony Soap",
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-indigo-200",
  },
  {
    name: "Jordan Nico",
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-purple-200",
  },
  {
    name: "Nadia Aija",
    text: "Lorem ipsum dolor sit amet...",
    color: "bg-indigo-200",
  },
];

const Messages = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-text">{t("messages.title")}</h3>
        <a href="#" className="text-xs text-blue-500">
          {t("messages.view_all")}
        </a>
      </div>
      <ul className="space-y-2 text-xs text-text">
        {messages.map((msg, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className={`w-6 h-6 rounded ${msg.color}`}></div>
            <div>
              <p className="font-medium">{msg.name}</p>
              <p className="text-gray-500 text-[11px]">{t(msg.textKey)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
