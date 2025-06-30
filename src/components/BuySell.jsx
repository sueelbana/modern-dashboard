import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { SiBitcoin, SiEthereum, SiLitecoin, SiRipple } from "react-icons/si";

const currencyConfigs = [
  { code: "bitcoin", icon: <SiBitcoin className="text-yellow-500 mr-2" /> },
  { code: "ethereum", icon: <SiEthereum className="text-blue-500 mr-2" /> },
  { code: "litecoin", icon: <SiLitecoin className="text-gray-500 mr-2" /> },
  { code: "ripple", icon: <SiRipple className="text-purple-500 mr-2" /> },
];

const BuySell = () => {
  const { t } = useTranslation();
  const [selectedCurrency, setSelectedCurrency] = useState("bitcoin");
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-bg p-4 rounded-lg border border-border w-80">
        <h3 className="font-semibold text-text mb-4">{t("buysell.title")}</h3>

        <div className="flex items-center gap-2 mb-4">
          <button className="flex-1 py-2 text-sm font-medium bg-primary text-white rounded">
            {t("buysell.buy")}
          </button>
          <button className="flex-1 py-2 text-sm font-medium button rounded shadow-md text-text">
            {t("buysell.sell")}
          </button>
        </div>

        <div className="mb-3">
          <label className="block text-sm text-text font-semibold mb-2">
            {t("buysell.choose_currency")}
          </label>
          <div className="relative mb-4">
            <button
              className="flex items-center justify-between w-full px-3 text-text py-2 border border-border rounded button"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <div className="flex items-center">
                {currencyConfigs.find((c) => c.code === selectedCurrency).icon}
                <span className="text-sm font-medium">
                  {t(`currencies.${selectedCurrency}`)}
                </span>
              </div>
              <MdKeyboardArrowDown className="text-primary" />
            </button>

            {openDropdown && (
              <ul className="absolute z-10 w-full bg-bg border border-border text-text rounded shadow mt-1">
                {currencyConfigs.map((c) => (
                  <li
                    key={c.code}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => {
                      setSelectedCurrency(c.code);
                      setOpenDropdown(false);
                    }}
                  >
                    {c.icon}
                    <span>{t(`currencies.${c.code}`)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-text mb-1">
              {t("buysell.amount")}
            </label>
            <div className="flex items-center px-3 py-2 border rounded bg-bg">
              <FaDollarSign className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder={t("buysell.insert_amount")}
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="w-40 py-2 bg-primary text-white font-semibold rounded">
              {t("buysell.confirm")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
