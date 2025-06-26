import React from "react";
import { useTranslation } from "react-i18next";
import InvoiceRow from "./InvoiceRow";

const InvoiceTable = ({ invoices }) => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left border text-sm text-gray-400">
            <th className="px-4 py-3 rounded-l-md">{t("invoice_table.invoice_id")}</th>
            <th className="px-4 py-3">{t("invoice_table.date")}</th>
            <th className="px-4 py-3">{t("invoice_table.amount")}</th>
            <th className="px-4 py-3">{t("invoice_table.due_date")}</th>
            <th className="px-4 py-3">{t("invoice_table.status")}</th>
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
