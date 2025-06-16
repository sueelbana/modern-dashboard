import React from "react";

const activities = [
  { label: "Transaction Assets", color: "bg-indigo-500", time: "2 hour ago" },
  { label: "New Credit Register", color: "bg-black", time: "2 hour ago" },
  { label: "Transaction Assets", color: "bg-yellow-500", time: "2 hour ago" },
  { label: "New Credit Register", color: "bg-pink-300", time: "2 hour ago" },
];

const RecentActivity = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">Recent Activity</h3>
      </div>

      <div className="flex space-x-2 mb-4">
        <button className="text-xs bg-indigo-500 text-text px-3 py-1 rounded-full">Activity</button>
        <button className="text-xs bg-text-secondary text-text px-3 py-1 rounded-full">Update</button>
      </div>

      <ul className="space-y-3 text-xs text-text">
        {activities.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded ${item.color}`}></div>
            <div className="flex justify-between w-full">
              <span>{item.label}</span>
              <span className="text-gray-400">{item.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
