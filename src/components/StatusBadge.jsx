import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const StatusBadge = ({ status }) => {
  const isPaid = status === "Paid";
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1
        ${
          isPaid ? "bg-indigo-100 text-indigo-700" : "bg-red-100 text-red-600"
        }`}
    >
      {isPaid ? (
        <FaCheckCircle className="text-indigo-500 text-sm" />
      ) : (
        <FaTimesCircle className="text-red-500 text-sm" />
      )}
      {status}
    </span>
  );
};

export default StatusBadge;
