import React from "react";
import ServerStatus from "./ServerStatus";
import Contacts from "./Contacts";
import Messages from "./Messages";
import RecentActivity from "./RecentActivity";

const RightSidebar = () => {
  return (
    <aside className="w-72 h-full bg-gray-100 border-l p-5 overflow-y-auto text-sm text-gray-800">
      <ServerStatus />
      <Contacts />
      <Messages />
      <RecentActivity />
    </aside>
  );
};

export default RightSidebar;
