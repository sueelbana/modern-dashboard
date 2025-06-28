import React from "react";
import { useTranslation } from "react-i18next";
import { BarChart, Bar } from "recharts";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const profitData = [
  { name: "M", value: 3 },
  { name: "T", value: 5 },
  { name: "W", value: 7 },
  { name: "T", value: 10 },
  { name: "F", value: 6 },
];

const expenseData = [
  { name: "M", value: 6 },
  { name: "T", value: 9 },
  { name: "W", value: 4 },
  { name: "T", value: 8 },
  { name: "F", value: 5 },
];

export default function ProfitExpenseSection() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="font-semibold text-text mb-2">{t("profitExp.title")}</h3>

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-black p-2 rounded-full">
            <FaArrowUp className="text-green-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-text">
              {t("profitExp.amount", { value: 120.455 })}
            </p>
            <p className="text-xs text-gray-500">{t("profitExp.income")}</p>
          </div>
        </div>
        <BarChart width={80} height={40} data={profitData}>
          <Bar dataKey="value" fill="#6366f1" radius={4} barSize={6} />
        </BarChart>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-black p-2 rounded-full">
            <FaArrowDown className="text-red-500" />
          </div>
          <div>
            <p className="text-lg font-bold text-text">
              {t("profitExp.amount", { value: 86.455 })}
            </p>
            <p className="text-xs text-gray-500">{t("profitExp.expense")}</p>
          </div>
        </div>
        <BarChart width={80} height={40} data={expenseData}>
          <Bar dataKey="value" fill="#fb7185" radius={4} barSize={6} />
        </BarChart>
      </div>
    </div>
  );
}
