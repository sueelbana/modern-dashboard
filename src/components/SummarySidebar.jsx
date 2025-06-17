// components/CryptoDashboard/SummarySidebar.jsx
import React from "react";

const SummarySidebar = () => {
  return (
    <div className="w-80 p-4 border-l border-gray-200 bg-white shadow-sm hidden xl:block">
      <div className="mb-6">
        <h4 className="text-lg font-bold text-gray-800">Summary</h4>
        <div className="h-32 mt-2">[Pie Chart Placeholder]</div>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-bold text-gray-800">Profit</h4>
        <p className="text-green-600 font-semibold">$120.455</p>
        <div className="h-16 mt-2">[Bar Chart Placeholder]</div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800">Recent Trading</h4>
        <ul className="mt-2 space-y-2 text-sm text-gray-700">
          <li>🟠 Bitcoin - $13.20</li>
          <li>🟣 Ethereum - $13.20</li>
          <li>🔵 Litecoin - $13.20</li>
          <li>🔷 Ripplecoin - $13.20</li>
        </ul>
      </div>
    </div>
  );
};

export default SummarySidebar;
