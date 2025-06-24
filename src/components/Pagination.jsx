import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-4 text-sm text-text">
      <p>
        Showing <span className="font-medium text-text">1–5</span> from{" "}
        <span className="font-medium text-text">100</span> data
      </p>
      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 rounded border border-gray-300 text-gray-400"
          disabled
        >
          &lt;
        </button>
        <button className="w-8 h-8 rounded border-2 border-indigo-500 text-indigo-600 font-semibold">
          1
        </button>
        <button className="w-8 h-8 rounded border border-gray-300 text-gray-500">
          2
        </button>
        <button className="w-8 h-8 rounded border border-gray-300 text-gray-500">
          3
        </button>
        <button
          className="w-8 h-8 rounded border border-gray-300 text-gray-400"
          disabled
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
