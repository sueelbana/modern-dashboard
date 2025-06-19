import { FaArrowUp } from "react-icons/fa"; // ✅ Replace info icon with up arrow
import sentImg from "../assets/chart.jpg";
import pendingImg from "../assets/chart1.jpg";
import unpaidImg from "../assets/chart2.jpg";
import paidImg from "../assets/chart3.jpg";

const invoicingData = [
  {
    label: "Sent",
    value: "1234",
    color: "text-primary",
    image: sentImg,
  },
  {
    label: "Pending",
    value: "654",
    color: "text-yellow-500",
    image: pendingImg,
  },
  {
    label: "Unpaid",
    value: "765",
    color: "text-red-400",
    image: unpaidImg,
  },
  {
    label: "Paid",
    value: "456",
    color: "text-sky-400",
    image: paidImg,
  },
];

const InvoicingCards = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-text mb-4">Invoicing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {invoicingData.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-border rounded-2xl flex justify-between items-end"
          >
            <div>
              <h3 className={`text-2xl font-bold ${item.color}`}>
                {item.value}
              </h3>
              <p className="text-sm text-text-secondary">{item.label}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-400">
                  <FaArrowUp className="text-white text-[10px]" />
                </div>
                <span>+15%</span>
              </div>
            </div>
            <img src={item.image} alt={item.label} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicingCards;
