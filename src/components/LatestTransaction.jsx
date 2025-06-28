import React from "react";
import { useTranslation } from "react-i18next";
import { MoreHorizontal } from "lucide-react";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { FiPaperclip } from "react-icons/fi";

const transactions = [
  {
    titleKey: "latest_transaction.title_music_event",
    date: "12 June, 2021",
    email: "samantha@email.com",
    statusKey: "latest_transaction.pending",
    statusColor: "bg-red-500",
    file: "ticket001.pdf",
    amount: "- $60.00",
  },
  {
    titleKey: "latest_transaction.title_anime_music_event",
    date: "12 June, 2021",
    email: "soap@email.com",
    statusKey: "latest_transaction.completed",
    statusColor: "bg-green-500",
    file: "ticket002.pdf",
    amount: "- $750.00",
  },
  {
    titleKey: "latest_transaction.title_home_decor_event",
    date: "12 June, 2021",
    email: "achmad@email.com",
    statusKey: "latest_transaction.pending",
    statusColor: "bg-red-500",
    file: "ticket003.pdf",
    amount: "- $150.00",
  },
  {
    titleKey: "latest_transaction.title_food_festival",
    date: "12 June, 2021",
    email: "hope@email.com",
    statusKey: "latest_transaction.completed",
    statusColor: "bg-green-500",
    file: "ticket004.pdf",
    amount: "- $50.00",
  },
  {
    titleKey: "latest_transaction.title_tech_seminar",
    date: "12 June, 2021",
    email: "cole@email.com",
    statusKey: "latest_transaction.completed",
    statusColor: "bg-green-500",
    file: "ticket005.pdf",
    amount: "- $10.00",
  },
  {
    titleKey: "latest_transaction.title_food_festival",
    date: "12 June, 2021",
    email: "john@email.com",
    statusKey: "latest_transaction.pending",
    statusColor: "bg-red-500",
    file: "ticket006.pdf",
    amount: "- $650.00",
  },
];

const LatestTransaction = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-text">{t("latest_transaction.title")}</h2>
        <a href="#" className="text-indigo-600 font-semibold text-sm">
          {t("latest_transaction.view_all")}
        </a>
      </div>

      <div className="space-y-4">
        {transactions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between pb-4"
          >
            <div className="flex items-center gap-4 w-[220px]">
              <div className="bg-primary p-2 rounded-lg text-white">
                <HiArrowsRightLeft className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-text">
                  {t(item.titleKey)}
                </p>
                <p className="text-xs text-text-secondary">{item.date}</p>
              </div>
            </div>

            <p className="text-sm text-text-secondary w-[180px]">
              {item.email}
            </p>

            <div className="flex items-center gap-2 w-[120px]">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${item.statusColor}`}
              ></span>
              <span className="text-sm text-text-secondary">
                {t(item.statusKey)}
              </span>
            </div>

            <a
              href="#"
              className="flex items-center gap-1 text-indigo-600 font-medium text-sm w-[120px]"
            >
              <FiPaperclip className="w-4 h-4" />
              {item.file}
            </a>

            <p className="text-sm font-bold text-text w-[100px] text-right">
              {item.amount}
            </p>

            <MoreHorizontal className="text-gray-400 w-5 h-5 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTransaction;
