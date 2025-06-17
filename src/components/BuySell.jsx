// components/CryptoDashboard/BuySell.jsx
import React from "react";

const BuySell = () => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Buy & Sell</h3>
      <div className="flex justify-between mb-4">
        <button className="px-4 py-1 rounded bg-blue-500 text-white">
          Buy
        </button>
        <button className="px-4 py-1 rounded bg-gray-200 text-black">
          Sell
        </button>
      </div>
      <select className="w-full mb-2 p-2 border rounded">
        <option>Bitcoin</option>
        <option>Ethereum</option>
      </select>
      <input
        type="number"
        placeholder="Insert amount"
        className="w-full mb-4 p-2 border rounded"
      />
      <button className="w-full bg-indigo-600 text-white py-2 rounded">
        Confirm
      </button>
    </div>
  );
};

export default BuySell;
