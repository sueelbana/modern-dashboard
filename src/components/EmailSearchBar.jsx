import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const EmailSearchBar = ({ placeholder, todayLabel }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 bg-border px-4 py-2 rounded-xl w-full h-14">
        <FaSearch className="text-primary" />
        <input
          type="text"
          placeholder={placeholder || t("emailList.search_placeholder")}
          className="bg-transparent outline-none w-full text-sm text-text-secondary placeholder:text-text-secondary"
        />
      </div>
      <div className="flex justify-end items-center gap-4 mt-2">
        <span className="text-sm text-text">
          {todayLabel || t("emailList.today")}
        </span>
        <button
          aria-label={t("emailList.more_options")}
          className="text-xl font-bold text-text-secondary hover:text-primary transition leading-none"
        >
          &#8230;
        </button>
      </div>
    </div>
  );
};

export default EmailSearchBar;
