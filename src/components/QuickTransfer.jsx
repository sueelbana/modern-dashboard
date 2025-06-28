import React from "react";
import { FaPlus, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const users = ["Tony", "Karen", "Jordan"];

const QuickTransfer = () => {
  const { t } = useTranslation();

  return (
    <div className="border border-border rounded-xl p-6 space-y-6">
      <div className="flex items-center gap-4">
        {users.map((user, index) => (
          <div key={index} className="text-center">
            <div className="w-10 h-10 rounded bg-gray-400 mb-1 mx-auto"></div>
            <p className="text-xs text-text font-semibold">{user}</p>
          </div>
        ))}

        <div className="text-center">
          <button className="w-10 h-10 bg-indigo-600 rounded mb-1 mx-auto flex items-center justify-center text-white">
            <FaPlus className="text-sm" />
          </button>
          <p className="text-xs text-transparent font-semibold">+</p>
        </div>
      </div>

      <div>
        <label className="text-sm text-text">{t("quickTransfer.amount")}</label>
        <input
          type="text"
          value="$100"
          readOnly
          className="mt-1 w-full px-4 py-2 bg-gray-100 rounded text-sm"
        />
      </div>

      <button className="w-full bg-indigo-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-2">
        {t("quickTransfer.transfer")} <FaArrowRight className="text-xs" />
      </button>
    </div>
  );
};

export default QuickTransfer;
