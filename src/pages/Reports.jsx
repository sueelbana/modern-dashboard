import InvoicingCards from "../components/InvoicingCards";
import LatestInvoice from "../components/LatestInvoice";
import RightCardSidebar from "../components/RightCardSidebar";

const Reports = () => {
  return (
    <div className="flex p-6">
      {/* Main Content */}
      <div className="flex-1 pr-6">
        <InvoicingCards />
        <LatestInvoice />
      </div>

      {/* Right Sidebar */}
      <RightCardSidebar />
    </div>
  );
};

export default Reports;
