import React from "react";
import { FaPrint, FaEllipsisH } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

const InvoiceRow = ({ invoice }) => {
  return (
    <tr className="bg-bg text-sm text-text shadow rounded-lg">
      <td className="px-4 py-3">{invoice.id}</td>
      <td className="px-4 py-3">{invoice.date}</td>
      <td className="px-4 py-3">{invoice.amount}</td>
      <td className="px-4 py-3">{invoice.due}</td>
      <td className="px-4 py-3">
        <StatusBadge status={invoice.status} />
      </td>
      <td className="px-2 py-3 text-center">
        <FaPrint className="text-gray-400 hover:text-gray-600 cursor-pointer" />
      </td>
      <td className="px-2 py-3 text-center">
        <FaEllipsisH className="text-gray-400 hover:text-gray-600 cursor-pointer" />
      </td>
    </tr>
  );
};

export default InvoiceRow;
