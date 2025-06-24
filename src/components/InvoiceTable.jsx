import React from "react";
import InvoiceRow from "./InvoiceRow";

const InvoiceTable = ({ invoices }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left border text-sm text-gray-400">
            <th className="px-4 py-3 rounded-l-md">Invoice ID</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Due Date</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-center rounded-r-md" colSpan="2" />
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <InvoiceRow key={index} invoice={invoice} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
