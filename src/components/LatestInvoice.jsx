import React from "react";
import InvoiceTable from "./InvoiceTable";
import Pagination from "./Pagination";

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

const LatestInvoice = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">Lastest Invoice</h3>
      <div className="bg-bg rounded-lg shadow-sm p-4">
        <InvoiceTable invoices={invoices} />
        <Pagination />
      </div>
    </div>
  );
};

export default LatestInvoice;
