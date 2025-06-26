import React from "react";
import { useTranslation } from "react-i18next";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiArrowsRightLeft } from "react-icons/hi2";

const transactions = [
  {
    titleKey: "transactions.toHeaven",
    typeKey: "transactions.service",
    date: "12 June, 2021",
    amount: "- $650.00",
  },
  {
    titleKey: "transactions.subscription",
    typeKey: "transactions.payment",
    date: "12 June, 2021",
    amount: "- $650.00",
  },
  {
    titleKey: "transactions.groceries",
    typeKey: "transactions.payment",
    date: "12 June, 2021",
    amount: "- $650.00",
  },
  {
    titleKey: "transactions.iconStudio",
    typeKey: "transactions.service",
    date: "12 June, 2021",
    amount: "- $650.00",
  },
];

const TransactionList = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-bg p-6 rounded-xl">
      <div className="mb-2">
        <h3 className="text-lg font-bold text-text">
          {t("transactions.title")}
        </h3>
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-4 items-center mb-2">
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          <a href="#" className="text-primary font-bold text-sm">
            {t("transactions.view_all")}
          </a>
        </div>
      </div>

      {/* Transactions */}
      <div className="space-y-4">
        {transactions.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-4 items-center gap-4 text-sm text-text-secondary"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg text-white">
                <HiArrowsRightLeft className="w-5 h-5" />
              </div>
              <div>
                <p className="text-text">{t(item.titleKey)}</p>
                <p className="text-xs text-red-500">{t(item.typeKey)}</p>
              </div>
            </div>

            {/* Date */}
            <div className="text-center text-xs text-gray-500">{item.date}</div>

            {/* Amount */}
            <div className="text-right font-semibold text-text">
              {item.amount}
            </div>

            {/* Options Button */}
            <div className="text-right">
              <button className="p-2 rounded hover:bg-gray-100 ml-4">
                <FiMoreHorizontal className="text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
