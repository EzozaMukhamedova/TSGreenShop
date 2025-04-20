import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../../Profile/Logout";
import AccountIcon from "../../../assets/images/account.svg";
import AccountDetailsIcon from "../../../assets/images/accountDetails.svg";
import LocationIcon from "../../../assets/images/location.svg";
import HeartIcon from "../../../assets/images/heartIcon.svg";
import TrackOrderIcon from "../../../assets/images/accountDetails.svg";
import LogoutIcon from "../../../assets/images/logout.svg";

interface SidebarProps {
  activeItem: string;
  setActiveItem: (key: string) => void;
}

const menuItems = [
  {
    key: "AccountDetails",
    icon: AccountIcon,
    label: "Account Details",
    route: "/account-details",
  },
  {
    key: "MyProducts",
    icon: AccountDetailsIcon,
    label: "My Products",
    route: "/my-products",
  },
  {
    key: "Address",
    icon: LocationIcon,
    label: "Address",
    route: "/address",
  },
  {
    key: "Wishlist",
    icon: HeartIcon,
    label: "Wishlist",
    route: "/wishlist",
  },
  {
    key: "TrackOrder",
    icon: TrackOrderIcon,
    label: "Track Order",
    route: "/track-order",
  },
  {
    key: "Logout",
    icon: LogoutIcon,
    label: "Log out",
    textColor: "red-500",
    hoverColor: "red-700",
    route: "/logout",
  },
];

const AccountSidebar: React.FC<SidebarProps> = ({
  activeItem,
  setActiveItem,
}) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleItemClick = (item: any) => {
    if (item.key === "Logout") {
      setShowLogoutModal(true); // modalni ochamiz
    } else {
      setActiveItem(item.key);
      navigate(item.route);
    }
  };

  return (
    <>
      {" "}
      <div className="w-1/4 p-5 bg-gray-50 px-[20px]">
        <ul className="space-y-7">
          <h2 className="text-left font-bold text-[22px]">My Account</h2>
          {menuItems.map((item) => (
            // <li
            //   key={item.key}
            //   className={`flex items-center cursor-pointer text-[18px] hover:text-${
            //     item.hoverColor || "green-500"
            //   } ${
            //     activeItem === item.key
            //       ? `text-${item.textColor || "green-500"} border-l-4 border-${
            //           item.textColor || "green-500"
            //         } pl-2`
            //       : ""
            //   }`}
            //   // onClick={() => {
            //   //   setActiveItem(item.key);
            //   //   if (item.route) {
            //   //     navigate(item.route);
            //   //   }
            //   // }}
            //   onClick={() => handleItemClick(item)}
            // >
            //   <img
            //     src={item.icon}
            //     className="mr-2"
            //     alt={`${item.label} Icon`}
            //   />
            //   {item.label}
            // </li>

            <li
              key={item.key}
              onClick={() => handleItemClick(item)}
              className={`
    flex items-center cursor-pointer text-[18px] 
    transition-all duration-200 
    ${
      activeItem === item.key
        ? `text-green-500 border-l-4 border-green-500 pl-2 font-semibold`
        : "text-gray-700 hover:text-green-500"
    }
  `}
            >
              <img
                src={item.icon}
                className="mr-2"
                alt={`${item.label} Icon`}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {/* <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
      /> */}
    </>
  );
};

export default AccountSidebar;
