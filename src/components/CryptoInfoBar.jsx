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
    <div className="inline-flex items-center h-[100px] text-lg px-4 bg-bg rounded-xl shadow border border-border font-medium divide-x divide-border">
      <div className="flex items-center h-full divide-x divide-border">
        {/* Token Selector */}
        <button className="flex items-center text-text px-4 space-x-2 text-lg w-40 h-full">
          <FaBitcoin className="text-purple-700" />
          <span>{t(`crypto.tokens.${token}`)}</span>
          <FiChevronDown className="text-gray-500" />
        </button>

        {/* Timer & Interval */}
        <button className="flex items-center px-4 font-bold text-text text-lg space-x-2 w-40 h-full">
          <span>{timer}</span>
          <span className="text-purple-700">
            {t(`crypto.intervals.${interval}`)}
          </span>
          <FiChevronDown className="text-gray-500" />
        </button>

        {/* Price and Change */}
        <div className="flex items-center px-4 space-x-2 text-text font-bold text-lg w-40 h-full">
          <span>{t("crypto.price", { value: price })}</span>
          <span
            className={
              change.startsWith("-") ? "text-red-500" : "text-green-500"
            }
          >
            {change}
          </span>
        </div>

        {/* Rate */}
        <div className="flex items-center px-4 font-bold text-text text-lg w-40 h-full">
          <span>{t("crypto.rate", { value: rate })}</span>
        </div>

        {/* Compare */}
        <button
          onClick={onCompare}
          className="flex items-center px-4 space-x-1 text-text cursor-pointer text-lg hover:underline w-40 h-full"
        >
          <FaPlusCircle />
          <span>{t("crypto.compare")}</span>
        </button>

        {/* Options */}
        <button
          onClick={onOptions}
          className="flex items-center px-4 text-gray-500 text-xl cursor-pointer w-40 h-full"
          aria-label={t("crypto.options")}
        >
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
};

export default CryptoInfoBar;
