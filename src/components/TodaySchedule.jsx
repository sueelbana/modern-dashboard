import React from "react";

const todayEvents = [
  {
    time: "09.00 - 10.00 AM",
    title: "Web Design Webinar",
    desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    color: "border-l-4 border-violet-500",
    badgeColor: "bg-violet-500",
  },
  {
    time: "09.00 - 10.00 AM",
    title: "Food Festival",
    desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    color: "border-l-4 border-yellow-400",
    badgeColor: "bg-yellow-400",
  },
  {
    time: "09.00 - 10.00 AM",
    title: "Tech Seminar",
    desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    color: "border-l-4 border-red-400",
    badgeColor: "bg-red-400",
  },
  {
    time: "09.00 - 10.00 AM",
    title: "Music Event",
    desc: "Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.",
    color: "border-l-4 border-sky-400",
    badgeColor: "bg-sky-400",
  },
];

const TodaySchedule = () => {
  return (
    <div className="p-4 w-full lg:w-80 preview-panel">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg text-text">Today</h2>
        <p className="text-sm text-text-secondary">
          Thursday, 10th April , 2021
        </p>
      </div>

      <div className="space-y-5">
        {todayEvents.map((event, idx) => (
          <div
            key={idx}
            className={`bg-bg shadow-sm rounded-xl p-4 border border-border border-l-[8px] ${event.color} flex flex-col`}
          >
            {/* Time + Avatars in one row */}
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

            <h3 className="text-sm text-text mb-1">
              {event.title}
            </h3>
            <p className="text-xs text-gray-500">{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySchedule;
