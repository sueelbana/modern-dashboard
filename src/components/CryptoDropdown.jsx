import { useState } from "react";
import { FaBitcoin, FaChevronDown } from "react-icons/fa";

const CryptoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Bitcoin");

  const options = ["Bitcoin", "Ethereum", "Litecoin", "Cardano"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border border-border px-4 py-2 rounded-lg hover:bg-bg-secondary transition"
      >
        <FaBitcoin className="text-primary" />
        <span className="font-medium">{selected}</span>
        <FaChevronDown className="text-sm" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-bg-dark border border-border rounded-md shadow-md">
          {options.map((crypto) => (
            <button
              key={crypto}
              onClick={() => {
                setSelected(crypto);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {crypto}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoDropdown;
