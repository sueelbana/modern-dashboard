import InvoicingCards from "../components/InvoicingCards";
import LatestInvoice from "../components/LatestInvoice";
import RightCardSidebar from "../components/RightCardSidebar";

const Reports = () => {
  return (
    <div className="flex w-full h-full overflow-hidden bg-bg">
      <div className="flex-1 pr-6">
        <InvoicingCards />
        <LatestInvoice />
      </div>
      <div className="w-[320px] border-border preview-panel">
        <RightCardSidebar />
      </div>
    </div>
  );
};

export default Reports;
