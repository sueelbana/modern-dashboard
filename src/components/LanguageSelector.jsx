import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import flag from "../assets/flag.jpg";
import i18n from "../i18n"; // ✅ Correct import

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    label: "English (US)",
    img: flag,
    code: "en",
  });

  const languages = [
    { label: "English (US)", img: flag, code: "en" },
    { label: "Arabic (AR)", img: "https://flagcdn.com/w40/eg.png", code: "ar" },
    { label: "French (FR)", img: "https://flagcdn.com/w40/fr.png", code: "fr" },
  ];

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
    i18n.changeLanguage(lang.code); // ✅ Ensure i18n is correctly imported
    document.documentElement.dir = lang.code === "ar" ? "rtl" : "ltr"; // 👈 For direction switch
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 px-3 py-1.5 bg-bg border rounded-full shadow-sm text-sm text-text cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedLang.img}
          alt="flag"
          className="w-5 h-5 rounded-full"
        />
        {selectedLang.label}
        <FaChevronDown className="text-xs" />
      </div>

      {isOpen && (
        <div className="absolute top-12 left-0 w-full z-10 bg-bg border rounded-md shadow-lg py-1">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 text-sm text-text cursor-pointer"
              onClick={() => handleSelect(lang)}
            >
              <img src={lang.img} alt="flag" className="w-5 h-5 rounded-full" />
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
