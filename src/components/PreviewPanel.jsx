import React from "react";
import {
  FaTrash,
  FaReply,
  FaTimes,
  FaStar,
  FaInfoCircle,
  FaPaperclip,
  FaImage,
  FaPaperPlane,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const PreviewPanel = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[350px] h-full min-h-[calc(100vh-4rem)] overflow-y-auto preview-panel p-6 text-gray-700">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold">{t("preview.title")}</span>
        <div className="flex space-x-2">
          <button className="p-2 rounded hover:bg-gray-200 text-gray-500 transition">
            <FaTrash />
          </button>
          <button className="p-2 rounded hover:bg-gray-200 text-gray-500 transition">
            <FaReply />
          </button>
          <button className="p-2 rounded hover:bg-gray-200 text-gray-500 transition">
            <FaTimes />
          </button>
        </div>
      </div>

      <span className="text-sm text-text-secondary">{t("preview.inbox")}</span>

      <div className="flex items-center space-x-3 my-3">
        <button className="flex items-center px-3 py-1 text-sm text-white bg-yellow-400 rounded-full font-semibold">
          <span className="mr-1">➤</span> {t("preview.important")}
        </button>
        <FaStar className="text-gray-300" />
        <FaInfoCircle className="text-gray-300" />
      </div>

      <h2 className="text-lg font-bold text-text leading-tight mb-1">
        {t("preview.subject_line1")}
        <br />
        {t("preview.subject_line2")}
      </h2>

      <p className="text-sm text-text-secondary mb-4">
        {t("preview.date", { date: "March 30th 2021", time: "06:45 PM" })}
      </p>

      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-text font-bold">
          T
        </div>
        <div>
          <div className="font-semibold text-sm text-text">
            {t("preview.sender.name")}
          </div>
          <div className="text-xs text-text-secondary">
            {t("preview.sender.email")}
          </div>
        </div>
      </div>

      <div className="text-sm leading-relaxed mb-4">
        <p>{t("preview.greeting", { name: t("preview.recipient") })}</p>
        <p className="mt-2">{t("preview.body")}</p>
        <p className="mt-4">
          {t("preview.signature")},<br />
          {t("preview.signatureName")}
        </p>
      </div>

      <div className="border rounded-lg p-3 bg-bg">
        <textarea
          placeholder={t("preview.compose_placeholder")}
          className="w-full border-none resize-none bg-bg focus:outline-none text-sm"
          rows={3}
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-3 text-gray-500 text-sm">
            <button className="font-bold">B</button>
            <button className="italic">I</button>
            <button className="underline">U</button>
            <button className="text-lg">⋮</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 px-1">
        <div className="flex space-x-2 text-gray-500">
          <button className="p-2 rounded hover:bg-gray-200 transition">
            <FaPaperclip />
          </button>
          <button className="p-2 rounded hover:bg-gray-200 transition">
            <FaImage />
          </button>
        </div>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold shadow">
          <FaPaperPlane className="mr-2" /> {t("preview.send")}
        </button>
      </div>
    </div>
  );
};

export default PreviewPanel;
