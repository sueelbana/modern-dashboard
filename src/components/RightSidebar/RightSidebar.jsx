import React from "react";
import ServerStatus from "./ServerStatus";
import Contacts from "./Contacts";
import Messages from "./Messages";
import RecentActivity from "./RecentActivity";

const RightSidebar = () => {
  return (
    <aside className="w-72 preview-panel p-5 text-sm text-text">
      <ServerStatus />
      <Contacts />
      <Messages />
      <RecentActivity />
    </aside>
  );
};

export default RightSidebar;
