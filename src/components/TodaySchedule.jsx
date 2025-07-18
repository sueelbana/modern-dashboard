import React from "react";
import { useTranslation } from "react-i18next";

const todayEvents = [
  {
    time: "09.00 - 10.00 AM",
    titleKey: "today_schedule.web_design",
    descKey: "today_schedule.web_design_desc",
    color: "border-l-4 border-violet-500",
    badgeColor: "bg-violet-500",
  },
  {
    time: "09.00 - 10.00 AM",
    titleKey: "today_schedule.food_festival",
    descKey: "today_schedule.food_festival_desc",
    color: "border-l-4 border-yellow-400",
    badgeColor: "bg-yellow-400",
  },
  {
    time: "09.00 - 10.00 AM",
    titleKey: "today_schedule.tech_seminar",
    descKey: "today_schedule.tech_seminar_desc",
    color: "border-l-4 border-red-400",
    badgeColor: "bg-red-400",
  },
  {
    time: "09.00 - 10.00 AM",
    titleKey: "today_schedule.music_event",
    descKey: "today_schedule.music_event_desc",
    color: "border-l-4 border-sky-400",
    badgeColor: "bg-sky-400",
  },
];

const TodaySchedule = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[320px] h-full border-border p-6 space-y-6 preview-panel overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-text">
          {t("today_schedule.today")}
        </h2>
        <p className="text-sm text-text-secondary">
          {t("today_schedule.date")}
        </p>
      </div>

      <div className="space-y-5">
        {todayEvents.map((event, idx) => (
          <div
            key={idx}
            className={`bg-bg shadow-sm rounded-xl p-4 border border-border border-l-[8px] ${event.color} flex flex-col`}
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs text-text-secondary">{event.time}</p>

              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gray-300 rounded border-2"
                    />
                  ))}
                </div>
                <div
                  className={`ml-2 w-6 h-6 rounded text-xs text-white flex items-center justify-center ${event.badgeColor}`}
                >
                  5+
                </div>
              </div>
            </div>

            <h3 className="text-sm text-text mb-1">{t(event.titleKey)}</h3>
            <p className="text-xs text-gray-500">{t(event.descKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySchedule;
