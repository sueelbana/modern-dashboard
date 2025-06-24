import React from "react";

const EmailPagination = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="flex items-center justify-between mt-6 text-sm text-gray-400">
      <span>Showing 1-5 from 100 data</span>
      <div className="flex items-center gap-2">
        <button className="px-2 py-1 rounded-full hover:bg-border">&lt;</button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 flex items-center justify-center rounded border border-border ${
              page === selectedPage
                ? "bg-primary text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedPage(page)}
          >
            {page}
          </button>
        ))}
        <button className="px-2 py-1 rounded-full hover:bg-gray-200">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EmailPagination;
