import React from "react";
import { ArrowRight } from "lucide-react";
import LatestTransaction from "../components/LatestTransaction";
import TodaySchedule from "../components/TodaySchedule";

const ticketData = [
  {
    title: "Ticket Solds",
    value: "8.900",
    change: "+0,5%",
    changeColor: "text-green-500",
    dotColor: "bg-blue-500",
    isNegative: false,
  },
  {
    title: "Ticket Refund",
    value: "1234",
    change: "-0,5%",
    changeColor: "text-red-500",
    dotColor: "bg-yellow-400",
    isNegative: true,
  },
  {
    title: "Total Sold",
    value: "1123",
    change: "+0,5%",
    changeColor: "text-green-500",
    dotColor: "bg-red-500",
    isNegative: false,
  },
  {
    title: "Target Sold",
    value: "765/1000",
    change: "-0,5%",
    changeColor: "text-red-500",
    dotColor: "bg-sky-400",
    isNegative: true,
  },
];

const Ticketing = () => {
  return (
    <div className="p-10 flex flex-col lg:flex-row gap-10">
      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-10">
        <h2 className="text-2xl text-text mb-6">Ticketing</h2>

        {/* Ticket Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
          {ticketData.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-xl p-3 shadow-sm w-full h-48 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-sm text-text font-medium mb-2">
                <span
                  className={`w-2 h-2 rounded-full ${item.dotColor}`}
                ></span>
                {item.title}
              </div>
              <div className="text-2xl text-text font-bold mb-1">
                {item.value}
              </div>
              <div className={`text-xs ${item.changeColor} mb-4`}>
                {item.change} than last month
              </div>
              <a
                href="#"
                className="text-sm font-semibold text-indigo-600 flex items-center gap-1"
              >
                View more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <LatestTransaction />
      </div>

      {/* Right Sidebar */}
      <TodaySchedule />
    </div>
  );
};

export default Ticketing;
