import React, { useState } from "react";
import { FaBitcoin, FaDollarSign } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const BuySell = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Bitcoin");
  const [openDropdown, setOpenDropdown] = useState(false);

  const currencies = ["Bitcoin", "Ethereum", "Litecoin", "Ripple"];

  return (
    <div className="bg-bg p-4 rounded-lg border border-border">
      <h3 className="font-semibold text-text mb-4">Buy & Sell</h3>
      <div className="flex items-center gap-2 mb-4">
        <button className="flex-1 py-2 text-sm font-medium bg-primary text-white rounded">
          Buy
        </button>
        <button className="flex-1 py-2 text-sm font-medium button rounded shadow-md text-text">
          Sell
        </button>
      </div>

      <div className="mb-3">
        <label className="block text-sm text-text font-semibold mb-2">
          Choose Currency
        </label>
        <div className="relative mb-4">
          <button
            className="flex items-center justify-between w-full px-3 text-text py-2 border border-border rounded button"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <div className="flex items-center">
              <FaBitcoin className="text-yellow-500 mr-2" />
              <span className="text-sm font-medium">{selectedCurrency}</span>
            </div>
            <MdKeyboardArrowDown className="text-primary" />
          </button>

          {openDropdown && (
            <ul className="absolute z-10 w-full bg-bg border border-border text-text rounded shadow mt-1">
              {currencies.map((currency) => (
                <li
                  key={currency}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedCurrency(currency);
                    setOpenDropdown(false);
                  }}
                >
                  {currency}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-text mb-1">
            Amount
          </label>
          <div className="flex items-center px-3 py-2 border rounded bg-bg">
            <FaDollarSign className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Insert amount"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="w-40 py-2 bg-primary text-white font-semibold rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuySell;
