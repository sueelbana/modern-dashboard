import React from "react";
import { useTranslation } from "react-i18next";
import { FaBitcoin, FaPlusCircle, FaEllipsisH } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const CryptoInfoBar = ({
  token = "bitcoin",
  timer = "1h 30m 1s",
  interval = "D",
  price = "480.2",
  change = "+5.5%",
  rate = "-0.0662%/hr",
  onCompare,
  onOptions,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center">
      <div className="inline-flex items-center h-[90px] px-5 bg-bg rounded-xl shadow border border-border font-medium divide-x divide-border min-w-[900px] max-w-[1100px] text-base">
        <div className="flex items-center h-full divide-x divide-border">
          <button className="flex items-center text-text px-5 space-x-2 h-full">
            <FaBitcoin className="text-purple-700" />
            <span>{t(`crypto.tokens.${token}`)}</span>
            <FiChevronDown className="text-gray-500" />
          </button>

          <button className="flex items-center px-5 font-bold text-text space-x-2 h-full">
            <span>{timer}</span>
            <span className="text-purple-700">
              {t(`crypto.intervals.${interval}`)}
            </span>
            <FiChevronDown className="text-gray-500" />
          </button>

          <div className="flex items-center px-5 space-x-2 text-text font-bold h-full">
            <span>{t("crypto.price", { value: price })}</span>
            <span className={change.startsWith("-") ? "text-red-500" : "text-green-500"}>
              {change}
            </span>
          </div>

          <div className="flex items-center px-5 font-bold text-text h-full">
            <span>{t("crypto.rate", { value: rate })}</span>
          </div>

          <button
            onClick={onCompare}
            className="flex items-center px-5 space-x-1 text-text cursor-pointer hover:underline h-full"
          >
            <FaPlusCircle />
            <span>{t("crypto.compare")}</span>
          </button>

          <button
            onClick={onOptions}
            className="flex items-center px-5 text-gray-500 text-xl cursor-pointer h-full"
            aria-label={t("crypto.options")}
          >
            <FaEllipsisH />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoInfoBar;
