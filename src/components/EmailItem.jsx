import React from "react";
import { FaPaperclip } from "react-icons/fa";

const EmailItem = ({ email, isSelected }) => {
  return (
    <div
      className={`flex items-start justify-between p-4 rounded-md ${
        isSelected ? "bg-primary/10" : "hover:bg-bg-secondary transition"
      }`}
    >
      <div className="flex items-start gap-3 flex-1">
        <div className="min-w-[40px] flex justify-center">
          <input type="checkbox" className="w-5 h-5 accent-primary" />
        </div>
        <div>
          <h4 className="font-semibold">{email.title}</h4>
          <p className="text-sm text-gray-400 line-clamp-1">{email.preview}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span>{email.time}</span>
        <FaPaperclip className="text-gray-400" />
      </div>
    </div>
  );
};

export default EmailItem;
