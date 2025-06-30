import InvoicingCards from "../components/InvoicingCards";
import LatestInvoice from "../components/LatestInvoice";
import RightCardSidebar from "../components/RightCardSidebar";

const Reports = () => {
  return (
    <div className="flex w-full h-full overflow-hidden bg-bg">
      {/* Main Content */}
      <div className="flex-1 p-4">
        <InvoicingCards />
        <LatestInvoice />
      </div>

      {/* Sidebar on the right */}
        <div className="w-[330px] border-border preview-panel">
        <RightCardSidebar />
        </div>
    </div>
  );
};

export default Reports;
