import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaEllipsisH,
  FaStar,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactCard = ({ name, positionKey = "contact.position_default" }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-[#1e192a] rounded-xl shadow p-4 text-center relative">
      <button
        className="absolute top-3 left-3 text-gray-300 hover:text-yellow-400 transition"
        aria-label={t("contact.mark_favorite")}
      >
        <FaStar />
      </button>

      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
        aria-label={t("contact.more_options")}
      >
        <FaEllipsisH />
      </button>

      <div className="w-16 h-16 bg-purple-300 rounded-lg mx-auto mb-2 relative">
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#1e192a] rounded-full" />
      </div>

      <h3 className="font-semibold text-gray-800 dark:text-white">{name}</h3>
      <p className="text-xs text-gray-500 mb-3">{t(positionKey)}</p>

      <div className="flex justify-center space-x-3 text-indigo-500">
        <button
          className="p-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700"
          aria-label={t("contact.email")}
        >
          <FaEnvelope />
        </button>
        <button
          className="p-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700"
          aria-label={t("contact.call")}
        >
          <FaPhone />
        </button>
        <button
          className="p-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700"
          aria-label={t("contact.message")}
        >
          <FaCommentDots />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
