// components/CryptoDashboard/CryptoChart.jsx
import React from "react";

const CryptoChart = () => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          <button className="border px-3 py-1 rounded bg-white">BTC</button>
          <span>1h 30m 1s</span>
        </div>
        <span className="text-red-500">-0.0652%/hr</span>
      </div>
      <div className="h-64">[Candlestick Chart Placeholder]</div>
    </div>
  );
};

export default CryptoChart;
