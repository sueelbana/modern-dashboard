import React from "react";
import {
  FaPrint,
  FaEllipsisH,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const invoices = [
  {
    id: "#123456",
    date: "21/03/2021",
    amount: "$145.00",
    due: "21/04/2021",
    status: "Paid",
  },
  {
    id: "#123456",
    date: "21/03/2021",
    amount: "$45.00",
    due: "21/04/2021",
    status: "Unpaid",
  },
  {
    id: "#123456",
    date: "21/03/2021",
    amount: "$75.00",
    due: "21/04/2021",
    status: "Paid",
  },
  {
    id: "#123456",
    date: "21/03/2021",
    amount: "$345.00",
    due: "21/04/2021",
    status: "Unpaid",
  },
  {
    id: "#123456",
    date: "21/03/2021",
    amount: "$454.00",
    due: "21/04/2021",
    status: "Paid",
  },
];

const StatusBadge = ({ status }) => {
  const isPaid = status === "Paid";
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1
      ${isPaid ? "bg-indigo-100 text-indigo-700" : "bg-red-100 text-red-600"}`}
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

const LatestInvoice = () => {
  return (
    <div className="space-y-4">
      {/* Title outside the card */}
      <h3 className="font-semibold text-gray-800">Lastest Invoice</h3>

      {/* Card */}
      <div className="bg-bg rounded-lg shadow-sm p-4">
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left border text-sm text-gray-400">
                <th className="px-4 py-3 rounded-l-md">Invoice ID</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3">Status</th>
                <th
                  className="px-4 py-3 text-center rounded-r-md"
                  colSpan="2"
                ></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr
                  key={index}
                  className="bg-bg text-sm text-text shadow rounded-lg"
                >
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
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
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
      </div>
    </div>
  );
};

export default LatestInvoice;
