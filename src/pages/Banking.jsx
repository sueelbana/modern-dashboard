import React from "react";
import QuickTransfer from "../components/QuickTransfer";
import cardImage from "../assets/my-card.jpg";
import ProfitsCard from "../components/ProfitsCard";
import TransactionList from "../components/TransactionList";
import SavingsCard from "../components/SavingsCard";

const MyCardSection = () => (
  <img
    src={cardImage}
    alt="My Card"
    className="w-full h-50 rounded-xl object-cover"
  />
);

const Banking = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-text mb-6">Banking</h2>

      {/* My Card & Quick Transfer + Profits Card */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* MyCard + QuickTransfer container */}
        <div className="bg-bg border border-border rounded-xl p-6 flex flex-col lg:flex-row gap-6 w-full lg:w-2/3">
          <div className="w-full lg:w-1/2">
            <h3 className="font-semibold text-lg text-text mb-4">My Card</h3>
            <MyCardSection />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-semibold text-lg text-text mb-4">
              Quick Transfer
            </h3>
            <QuickTransfer />
          </div>
        </div>

        {/* Profits Card */}
        <div className="w-full lg:w-1/3">
          <div className="h-full">
            <ProfitsCard />
          </div>
        </div>
      </div>

      {/* Transaction List + Savings Card side by side */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-2/3">
          <TransactionList />
        </div>
        <div className="w-full border border-border rounded-xl lg:w-1/3">
          <SavingsCard />
        </div>
      </div>
    </div>
  );
};

export default Banking;
