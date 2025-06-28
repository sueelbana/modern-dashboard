import {
  FaHome,
  FaEnvelope,
  FaAddressBook,
  FaCoins,
  FaThLarge,
  FaBook,
  FaDollarSign,
  FaTicketAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Sidebar = () => {
  const iconClass =
    "text-2xl text-text-secondary hover:text-primary transition-colors";
  const activeClass = "text-primary";

  return (
    <aside className="h-full w-20 bg-bg border-r border-border shadow flex flex-col items-center py-6">
      <div className="mb-10">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-xl" />
      </div>

      <nav className="flex flex-col gap-8 items-center">
        <Link to="/">
          <FaHome className={`${iconClass} ${activeClass}`} />
        </Link>
        <Link to="/email">
          <FaEnvelope className={iconClass} />
        </Link>
        <Link to="/contacts">
          <FaAddressBook className={iconClass} />
        </Link>
        <Link to="/crypto">
          <FaCoins className={iconClass} />
        </Link>
        <Link to="/kanban">
          <FaThLarge className={iconClass} />
        </Link>
        <Link to="/reports">
          <FaBook className={iconClass} />
        </Link>
        <Link to="/banking">
          <FaDollarSign className={iconClass} />
        </Link>
        <Link to="/tickets">
          <FaTicketAlt className={iconClass} />
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
