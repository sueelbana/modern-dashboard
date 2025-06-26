import React from "react";
import { FaCaretUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const barHeights = [
  20, 28, 18, 32, 25, 10, 38, 40, 50, 45, 12, 6, 24, 10, 30, 28, 100, 16, 90,
  85, 50, 42, 38, 36, 44, 18, 14, 20, 28, 40, 10, 12, 16, 30, 18, 10, 24, 40,
  38, 36, 20, 16, 12, 32, 44, 18, 24, 40, 30, 12,
];

export default function ServerStatus() {
  const { t } = useTranslation();

  return (
    <div className="p-4 bg-transparent">
      {/* Title */}
      <h3 className="text-lg font-bold text-text mb-4">{t("server.title")}</h3>

      {/* Bars */}
      <div className="flex items-end justify-between h-28 mb-6">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="w-[2px] bg-indigo-500"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-3 text-center text-xs">
        <div>
          <p className="text-text-secondary">{t("server.country")}</p>
          <p className="font-medium text-text">
            {t("server.country_value", "Indonesia")}
          </p>
        </div>
        <div>
          <p className="text-text-secondary">{t("server.domain")}</p>
          <p className="font-medium text-text">
            {t("server.domain_value", "website.com")}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-text-secondary">{t("server.speed")}</p>
          <p className="flex items-center gap-1 font-medium text-text">
            <FaCaretUp className="text-text text-sm" />{" "}
            {t("server.speed_value", "2.0 mbps")}
          </p>
        </div>
      </div>
    </div>
  );
}
