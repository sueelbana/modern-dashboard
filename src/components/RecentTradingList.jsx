import React from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiRipple } from "react-icons/si";

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: <FaBitcoin className="text-white" />,
    bg: "bg-purple-600",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: <FaEthereum className="text-white" />,
    bg: "bg-yellow-500",
  },
  {
    name: "Litecoin",
    symbol: "LTC",
    icon: <SiLitecoin className="text-white" />,
    bg: "bg-red-400",
  },
  {
    name: "Ripplecoin",
    symbol: "RPL",
    icon: <SiRipple className="text-white" />,
    bg: "bg-sky-400",
  },
];

const RecentTradingList = () => {
  return (
    <div>
      <h3 className="font-semibold text-text mb-4">Recent Trading</h3>
      <ul className="space-y-4 text-sm">
        {coins.map((coin, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${coin.bg}`}
              >
                {coin.icon}
              </div>
              <div>
                <p className="font-medium text-text">{coin.name}</p>
                <p className="text-xs text-gray-500">{coin.symbol}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-text">$13.90</p>
              <p className="text-xs text-gray-500">Today, 12:30 AM</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTradingList;
