import React from "react";
import ServerStatus from "./ServerStatus";
import Contacts from "./Contacts";
import Messages from "./Messages";
import RecentActivity from "./RecentActivity";

const RightSidebar = () => {
  return (
    <aside className="w-72 h-full preview-panel border-l p-5 overflow-y-auto text-sm text-text">
      <ServerStatus />
      <Contacts />
      <Messages />
      <RecentActivity />
    </aside>
  );
};

export default RightSidebar;
