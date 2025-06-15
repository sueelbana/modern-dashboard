import { FaHome, FaEnvelope, FaAddressBook, FaCoins, FaThLarge, FaBook, FaDollarSign, FaTicketAlt } from "react-icons/fa";
import logo from "../assets/logo.jpg"; 

const Sidebar = () => {
  const iconClass = "text-2xl text-gray-400 hover:text-primary transition-colors";
  const activeClass = "text-primary";

  return (
    <aside className="h-screen w-20 bg-white flex flex-col items-center py-6 shadow">
      <div className="mb-10">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl" />
      </div>

      <nav className="flex flex-col gap-8 items-center">
        <FaHome className={`${iconClass} ${activeClass}`} />
        <FaEnvelope className={iconClass} />
        <FaAddressBook className={iconClass} />
        <FaCoins className={iconClass} />
        <FaThLarge className={iconClass} />
        <FaBook className={iconClass} />
        <FaDollarSign className={iconClass} />
        <FaTicketAlt className={iconClass} />
      </nav>
    </aside>
  );
};

export default Sidebar;
