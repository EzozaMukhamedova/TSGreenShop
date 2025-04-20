import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AccountSidebar from "../components/Profile/AccountDetails";

const Layout: React.FC = () => {
  const [activeItem, setActiveItem] = useState("AccountDetails");

  return (
    <div className="flex w-full min-h-screen">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="w-3/4 p-6">
        <Outlet /> {/* Bu yerda sahifa kontenti ko‘rinadi */}
      </div>
    </div>
  );
};

export default Layout;
