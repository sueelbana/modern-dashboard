import { FaInbox, FaPlusCircle } from "react-icons/fa";
import {
  MdSend,
  MdStar,
  MdEdit,
  MdLabelImportant,
  MdSchedule,
  MdExpandMore,
} from "react-icons/md";

const EmailSidebar = () => {
  return (
    <div className="w-64">
      {/* Title OUTSIDE the container */}
      <h2 className="text-xl font-semibold text-text mb-4">Email</h2>

      {/* Entire Box with border */}
      <div className="border border-border rounded-lg p-4 shadow-sm space-y-6 bg-bg">
        {/* New Mail */}
        <button className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/90 transition">
          + New Mail
        </button>

        {/* Folder Buttons */}
        <div className="space-y-2">
          <button className="flex items-center justify-between w-full bg-primary/10 text-primary font-medium py-2 px-3 rounded-md hover:bg-primary/20">
            <span className="flex items-center gap-2">
              <FaInbox />
              Inbox
            </span>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </button>

          <button className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition" disabled>
            <MdSend />
            Sent
          </button>

          <button className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition" disabled>
            <MdStar />
            Favorite
          </button>

          <button className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition" disabled>
            <MdEdit />
            Draft
          </button>

          <button className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition" disabled>
            <MdLabelImportant />
            Important
          </button>

          <button className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition" disabled>
            <MdSchedule />
            Scheduled
          </button>

          <button className="flex items-center gap-2 w-full text-text py-2 px-3 rounded-md hover:bg-gray-400 transition" disabled>
            <MdExpandMore />
            More
          </button>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-text mb-2">Categories</h3>

          <button className="flex items-center gap-2 w-full py-2 px-3 rounded-md text-text hover:bg-gray-400 transition">
            <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
            <span>Work</span>
          </button>

          <button className="flex items-center gap-2 w-full py-2 px-3 rounded-md text-text hover:bg-gray-400 transition">
            <span className="w-4 h-4 rounded-full bg-red-400"></span>
            <span>Side Projects</span>
          </button>

          <button className="flex items-center gap-2 w-full py-2 px-3 text-text font-medium hover:underline">
            <FaPlusCircle />
            <span>Add Categories</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSidebar;
