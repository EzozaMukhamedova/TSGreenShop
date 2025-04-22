import React, { useState } from "react";
import LogoutModal from "./LogoutModal";
import AccountSidebar from "../AccountSidebar/AccountSidebar";

const Logout = () => {
  const [activeItem, setActiveItem] = useState("Logout");
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex w-full mt-[100px] px-[20px]">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="w-full p-6">
        <LogoutModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default Logout;
