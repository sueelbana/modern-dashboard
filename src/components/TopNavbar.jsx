import { useEffect, useState } from "react";
import { FaSearch, FaBell, FaRegCommentDots, FaCog } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const TopNavbar = () => {
  const { t } = useTranslation();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-bg shadow-sm border-b border-border text-text">
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-border px-4 py-2 rounded-xl w-72">
        <FaSearch className="text-primary" />
        <input
          type="text"
          placeholder={t("topnav.search_placeholder")}
          className="bg-border w-full text-sm text-text-secondary placeholder:text-text-secondary"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6">
        <LanguageSelector />

        {/* Theme Toggle Icon */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
          title={t("topnav.theme_toggle")}
        >
          {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>

        {/* Messages Icon */}
        <div
          className="relative hover:bg-hover p-2 rounded-lg transition duration-300 cursor-pointer"
          title={t("topnav.messages")}
        >
          <FaRegCommentDots className="text-text-secondary text-xl" />
          <span className="absolute -top-1 -right-1 w-4 h-4 text-xs bg-primary text-white rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        {/* Notifications Icon */}
        <div
          className="relative hover:bg-hover p-2 rounded-lg transition duration-300 cursor-pointer"
          title={t("topnav.notifications")}
        >
          <FaBell className="text-text-secondary text-xl" />
          <span className="absolute -top-1 -right-1 w-4 h-4 text-xs bg-primary text-white rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        {/* Settings Icon */}
        <div
          className="relative hover:bg-hover p-2 rounded-lg transition duration-300 cursor-pointer"
          title={t("topnav.settings")}
        >
          <FaCog className="text-text-secondary text-xl" />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt="user"
            className="w-9 h-9 object-cover rounded-xl"
          />
          <div className="text-sm">
            <div className="font-semibold text-text">Zara Wardani</div>
            <div className="text-text-secondary">{t("topnav.admin")}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
