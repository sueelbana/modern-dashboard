import React from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiRipple } from "react-icons/si";
import { useTranslation } from "react-i18next";

const rawCoins = [
  { code: "bitcoin",  symbol: "BTC", icon: <FaBitcoin className="text-white" />, bg: "bg-purple-600" },
  { code: "ethereum", symbol: "ETH", icon: <FaEthereum className="text-white" />, bg: "bg-yellow-500" },
  { code: "litecoin", symbol: "LTC", icon: <SiLitecoin className="text-white" />, bg: "bg-red-400" },
  { code: "ripple",   symbol: "RPL", icon: <SiRipple className="text-white" />,  bg: "bg-sky-400" },
];

export default function RecentTradingList() {
  const { t } = useTranslation();

  // Example static values
  const price = 13.9;
  const timeKey = "recentTrading.time_today";

  return (
    <div>
      {/* Localized title */}
      <h3 className="font-semibold text-text mb-4">
        {t("recentTrading.title")}
      </h3>

      <ul className="space-y-4 text-sm">
        {rawCoins.map((coin) => (
          <li key={coin.code} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${coin.bg}`}
              >
                {coin.icon}
              </div>
              <div>
                {/* Localized coin name */}
                <p className="font-medium text-text">
                  {t(`crypto.tokens.${coin.code}`)}
                </p>
                {/* Localized symbol (if you need it) */}
                <p className="text-xs text-gray-500">
                  {t(`crypto.symbols.${coin.code}`, { symbol: coin.symbol })}
                </p>
              </div>
            </div>
            <div className="text-right">
              {/* Localized price */}
              <p className="font-medium text-text">
                {t("recentTrading.price", { value: price })}
              </p>
              {/* Localized time */}
              <p className="text-xs text-gray-500">
                {t(timeKey)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
