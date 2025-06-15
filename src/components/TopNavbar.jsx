import { FaSearch, FaBell, FaRegCommentDots, FaCog } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";
import LanguageSelector from "./LanguageSelector";

const TopNavbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2 bg-[#f6f3fe] px-4 py-2 rounded-xl w-72">
        <FaSearch className="text-primary" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none w-full text-sm text-gray-700"
        />
      </div>

      <div className="flex items-center gap-6">
      <LanguageSelector />

        <div className="relative hover:bg-[#eceffe] hover:text-[#6c63ff] p-2 rounded-lg transition duration-300 cursor-pointer">
          <FaRegCommentDots className="text-gray-400 text-xl" />
          <span className="absolute -top-1 -right-1 w-4 h-4 text-xs bg-primary text-white rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        <div className="relative hover:bg-[#eceffe] hover:text-[#6c63ff] p-2 rounded-lg transition duration-300 cursor-pointer">
          <FaBell className="text-gray-400 text-xl" />
          <span className="absolute -top-1 -right-1 w-4 h-4 text-xs bg-primary text-white rounded-full flex items-center justify-center">
            2
          </span>
        </div>

        <div className="relative hover:bg-[#eceffe] hover:text-[#6c63ff] p-2 rounded-lg transition duration-300 cursor-pointer">
          <FaCog className="text-gray-400 text-xl" />
        </div>

        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt="user"
            className="w-9 h-9 object-cover rounded-xl"
          />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">Zara Wardani</div>
            <div className="text-gray-400">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
