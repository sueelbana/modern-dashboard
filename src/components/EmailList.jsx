import React, { useState } from "react";
import EmailSearchBar from "./EmailSearchBar";
import EmailItem from "./EmailItem";
import EmailPagination from "./EmailPagination";

const emailData = [
  {
    id: 1,
    title: "Daily Meeting Schedule with Stakeholders",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
    time: "5h",
  },
  {
    id: 2,
    title: "Weekly Server Maintenance",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
    time: "5h",
  },
  {
    id: 3,
    title: "Design Newsletter",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
    time: "5h",
  },
  {
    id: 4,
    title: "Your Daily Booster",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
    time: "5h",
  },
  {
    id: 5,
    title: "Weekly Report",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
    time: "5h",
  },
  {
    id: 6,
    title: "Project Management Newsletter",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...",
    time: "5h",
  },
];

const EmailList = () => {
  const [selectedPage, setSelectedPage] = useState(2);

  return (
    <div className="flex-1 px-4 py-6 text-text">
      <EmailSearchBar />
      <div className="space-y-2">
        {emailData.map((email, idx) => (
          <EmailItem key={email.id} email={email} isSelected={idx === 1} />
        ))}
      </div>
      <EmailPagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default EmailList;
