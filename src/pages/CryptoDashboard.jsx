import React from "react";
import { useTranslation } from "react-i18next";
import MarketCard from "../components/MarketCard";
import CryptoInfoBar from "../components/CryptoInfoBar";
import CandleChart from "../components/CandleChart";
import MarketActivity from "../components/MarketActivity";
import BuySell from "../components/BuySell";
import SummarySidebar from "../components/SummarySidebar";

const btcData = [
  { value: 20000 },
  { value: 28000 },
  { value: 40000 },
  { value: 22000 },
  { value: 60000 },
  { value: 20000 },
  { value: 40000 },
  { value: 54000 },
  { value: 22000 },
];

const ethData = [
  { value: 20000 },
  { value: 58000 },
  { value: 40000 },
  { value: 22000 },
  { value: 22000 },
  { value: 53000 },
  { value: 40000 },
  { value: 54000 },
  { value: 22000 },
];

const ltcData = [
  { value: 20000 },
  { value: 46000 },
  { value: 40000 },
  { value: 44000 },
  { value: 22000 },
  { value: 53000 },
  { value: 40000 },
  { value: 54000 },
  { value: 58000 },
];

const rplData = [
  { value: 20000 },
  { value: 46000 },
  { value: 40000 },
  { value: 60000 },
  { value: 22000 },
  { value: 53000 },
  { value: 40000 },
  { value: 54000 },
  { value: 58000 },
];

const CryptoDashboard = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full h-full overflow-hidden bg-bg">
      <div className="flex-1 overflow-y-auto p-6 space-y-6 border-r border-border">
        <h2 className="text-2xl font-semibold text-text mb-4">
          {t("crypto.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MarketCard
            title="BTC"
            price="45,741"
            data={btcData}
            strokeColor="#5B3EE4"
            gradientId="btc"
            isUp={true}
          />

          <MarketCard
            title="ETH"
            price="45,741"
            data={ethData}
            strokeColor="#FACC15"
            gradientId="eth"
            isUp={false}
          />

          <MarketCard
            title="LTC"
            price="45,741"
            data={ltcData}
            strokeColor="#F87171"
            gradientId="ltc"
            isUp={true}
          />

          <MarketCard
            title="RPL"
            price="45,741"
            data={rplData}
            strokeColor="#38BDF8"
            gradientId="rpl"
            isUp={false}
          />
        </div>

        <div className="p-2">
          <CryptoInfoBar />
        </div>

        <div className="mt-6 w-full">
          <CandleChart />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="w-full xl:w-[550px]">
            <MarketActivity />
          </div>
          <div className="xl:ml-28">
            <BuySell />
          </div>
        </div>
      </div>
      <div className="w-[300px] border-border preview-panel">
        <SummarySidebar />
      </div>
    </div>
  );
};

export default CryptoDashboard;
