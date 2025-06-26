import React from "react";
import { useTranslation } from "react-i18next";
import InvoiceTable from "./InvoiceTable";
import Pagination from "./Pagination";

const LatestInvoice = () => {
  const { t } = useTranslation();

  const invoices = [
    {
      id: "#123456",
      date: "21/03/2021",
      amount: "$145.00",
      due: "21/04/2021",
      status: t("invoice.status.paid"),
    },
    {
      id: "#123456",
      date: "21/03/2021",
      amount: "$45.00",
      due: "21/04/2021",
      status: t("invoice.status.unpaid"),
    },
    {
      id: "#123456",
      date: "21/03/2021",
      amount: "$75.00",
      due: "21/04/2021",
      status: t("invoice.status.paid"),
    },
    {
      id: "#123456",
      date: "21/03/2021",
      amount: "$345.00",
      due: "21/04/2021",
      status: t("invoice.status.unpaid"),
    },
    {
      id: "#123456",
      date: "21/03/2021",
      amount: "$454.00",
      due: "21/04/2021",
      status: t("invoice.status.paid"),
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-800">
        {t("invoice.latest_invoice")}
      </h3>
      <div className="bg-bg rounded-lg shadow-sm p-4">
        <InvoiceTable invoices={invoices} />
        <Pagination />
      </div>
    </div>
  );
};

export default LatestInvoice;
