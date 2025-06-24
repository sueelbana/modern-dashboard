import React from "react";
import { FaSearch } from "react-icons/fa";

const EmailSearchBar = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 bg-border px-4 py-2 rounded-xl w-full h-14">
        <FaSearch className="text-primary" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none w-full text-sm text-text-secondary placeholder:text-text-secondary"
        />
      </div>
      <div className="flex justify-end items-center gap-4 mt-2">
        <span className="text-sm text-text">Today</span>
        <button className="text-xl font-bold text-text-secondary hover:text-primary transition leading-none">
          &#8230;
        </button>
      </div>
    </div>
  );
};

export default EmailSearchBar;
