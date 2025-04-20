import React, { useState } from "react";
import AccountSidebar from "./AccountSidebar/AccountSidebar";
import AccountDetails from "./AccountDetails";
import MyProducts from "./MyProducts";
import Wishlist from "./Wishlist";
import Address from "./Address";
import TrackOrder from "./TrackOrder";
import Logout from "./Logout";

const Profile: React.FC = () => {
  const [activeItem, setActiveItem] = useState("AccountDetails");

  return (
    <div className=" mx-auto  my-[50px]  flex w-full mt-[100px] px-[20px]">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="w-full ml-6">
        {/* {activeItem === "AccountDetails" && <AccountDetails />} */}
        {activeItem === "MyProducts" && <MyProducts />}
        {activeItem === "Wishlist" && <Wishlist />}
        {activeItem === "Address" && <Address />}
        {activeItem === "TrackOrder" && <TrackOrder />}
        {activeItem === "Logout" && <Logout />}
      </div>
    </div>
  );
};

export default Profile;
