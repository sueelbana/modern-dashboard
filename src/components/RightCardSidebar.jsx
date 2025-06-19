// components/RightCardSidebar.jsx
import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const RightCardSidebar = () => {
  const [activeTab, setActiveTab] = useState("Important");

  return (
    <div className="w-80 preview-panel border-l border-border p-6 space-y-6">
      {/* Card Section */}
      <div>
        <h3 className="font-semibold text-text mb-4">My Card</h3>
        <div className="w-full rounded-xl p-4 text-white bg-gradient-to-tr from-indigo-500 via-purple-500 to-yellow-400 shadow-lg">
          <div className="text-sm opacity-80">Name</div>
          <div className="font-semibold mb-2">Nella Vita</div>
          <div className="text-right text-sm tracking-widest mb-2">
            •••• •••• •••• 1234
          </div>
          <div className="text-sm opacity-80">Balance</div>
          <div className="text-2xl font-bold mb-2">$4811,21</div>
          <div className="flex justify-end">
            <div className="w-8 h-8 rounded-full bg-white opacity-80 mr-1"></div>
            <div className="w-8 h-8 rounded-full bg-white opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Send Invoices */}
      <div>
        <h3 className="font-semibold text-text mb-4">Send Invoices</h3>

        {/* Tabs */}
        <div className="flex border-b text-sm mb-4">
          <button
            onClick={() => setActiveTab("Important")}
            className={`px-4 py-2 font-medium ${
              activeTab === "Important"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500"
            }`}
          >
            Important
          </button>
          <button
            onClick={() => setActiveTab("Socials")}
            className={`px-4 py-2 font-medium ${
              activeTab === "Socials"
                ? "border-b-2 border-indigo-600 text-indigo-600"
                : "text-gray-500"
            }`}
          >
            Socials
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4 text-sm">
          {/* Recipient Dropdown */}
          <div className="relative">
            <select className="w-full border-border rounded px-4 py-2 text-text appearance-none table">
              <option>Select from list</option>
            </select>
            <IoChevronDownSharp className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Amount Input */}
          <div className="flex items-center px-3 py-2 border rounded teble">
            <FaDollarSign className="text-indigo-600 mr-2" />
            <input
              type="text"
              placeholder="Insert amount"
              className="bg-transparent outline-none w-full text-text"
            />
          </div>

          {/* Reference Input */}
          <input
            type="text"
            placeholder="Enter reference here"
            className="w-full px-4 py-2 border rounded table text-text"
          />

          {/* Confirm Button */}
          <div className="flex justify-center">
            <button className="w-full py-2 bg-indigo-600 text-white font-semibold rounded">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardSidebar;
