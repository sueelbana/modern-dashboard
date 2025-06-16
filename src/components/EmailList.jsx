import { FaPaperclip } from "react-icons/fa";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

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
      <div className="mb-6">
        <div className="flex items-center gap-2 bg-border px-4 py-2 rounded-xl w-full h-14">
          <FaSearch className="text-primary" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none w-full text-sm text-text-secondary placeholder:text-text-secondary"
          />
        </div>
        <div className="flex justify-end items-center gap-4 mt-2">
          <span className="text-sm text-text">Today</span>
          <button className="text-xl font-bold text-text-secondary hover:text-primary transition leading-none">
            &#8230;
          </button>
        </div>
      </div>

      {/* Email List */}
      <div className="space-y-2">
        {emailData.map((email, idx) => (
          <div
            key={email.id}
            className={`flex items-start justify-between p-4 rounded-md ${
              idx === 1 ? "bg-primary/10" : "hover:bg-bg-secondary transition"
            }`}
          >
            <div className="flex items-start gap-3 flex-1">
              {/* Wider checkbox container */}
              <div className="min-w-[40px] flex justify-center">
                <input type="checkbox" className="w-5 h-5 accent-primary" />
              </div>

              <div>
                <h4 className="font-semibold">{email.title}</h4>
                <p className="text-sm text-gray-400 line-clamp-1">
                  {email.preview}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>{email.time}</span>
              <FaPaperclip className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 text-sm text-gray-400">
        <span>Showing 1-5 from 100 data</span>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded-full hover:bg-border">
            &lt;
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 flex items-center justify-center rounded border border-border ${
                page === selectedPage ? "text-" : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedPage(page)}
            >
              {page}
            </button>
          ))}
          <button className="px-2 py-1 rounded-full hover:bg-gray-200">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
