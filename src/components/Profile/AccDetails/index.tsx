// import React, { useState, useEffect } from "react";

// // import AccountIcon from "../../assets/images/account.svg";
// import AccountIcon from "../../../assets/images/account.svg";

// import AccountDetailsIcon from "../../assets/images/accountDetails.svg";
// import LocationIcon from "../../assets/images/location.svg";
// import HeartIcon from "../../assets/images/heartIcon.svg";
// import TrackOrderIcon from "../../assets/images/accountDetails.svg";
// import LogoutIcon from "../../assets/images/logout.svg";
// import { useNavigate } from "react-router-dom";

// // const navigate = useNavigate();

// interface MyAccountItem {
//   key: string;
//   icon: string;
//   label: string;
//   textColor?: string;
//   hoverColor?: string;
// }

// const menuItems: MyAccountItem[] = [
//   {
//     key: "AccountDetails",
//     icon: AccountIcon,
//     label: "Account Details",
//   },
//   {
//     key: "MyProducts",
//     icon: AccountDetailsIcon,
//     label: "My Products",
//     // onClick: () => navigate("/my-products"),
//   },
//   {
//     key: "Address",
//     icon: LocationIcon,
//     label: "Address",
//   },
//   {
//     key: "Wishlist",
//     icon: HeartIcon,
//     label: "Wishlist",
//   },
//   {
//     key: "TrackOrder",
//     icon: TrackOrderIcon,
//     label: "Track Order",
//   },
//   {
//     key: "Logout",
//     icon: LogoutIcon,
//     label: "Log out",
//     textColor: "red-500",
//     hoverColor: "red-700",
//   },
// ];

// function AccDetails() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [username, setUsername] = useState("");
//   const [activeItem, setActiveItem] = useState("AccountDetails");

//   useEffect(() => {
//     const userData = localStorage.getItem("loggedInUser");
//     if (userData) {
//       const user = JSON.parse(userData);
//       setFirstName(user.firstName || user.name || "");
//       setLastName(user.lastName || user.surname || "");
//       setEmail(user.email || "");
//       setPhone(user.phone || "");
//       setUsername(user.username || "");
//     }
//   }, []);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const updatedUserData = { firstName, lastName, email, phone, username };
//     localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
//     alert("Ma'lumotlar yangilandi!");
//   };

//   return (
//     <div className="flex w-[1100px] mx-auto mt-[100px] my-[50px] border">
//       <div className="w-1/4 p-5 bg-gray-50">
//         <ul className="space-y-7">
//           {menuItems.map((item: MyAccountItem) => (
//             <li
//               key={item.key}
//               className={`flex items-center cursor-pointer text-[18px] hover:text-${
//                 item.hoverColor || "green-500"
//               } ${
//                 activeItem === item.key
//                   ? `text-${item.textColor || "green-500"} border-l-4 border-${
//                       item.textColor || "green-500"
//                     } pl-2`
//                   : ""
//               }`}
//               onClick={() => setActiveItem(item.key)}
//             >
//               <img
//                 src={item.icon}
//                 className="mr-2"
//                 alt={`${item.label} Icon`}
//               />
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="w-3/4 mx-auto border border-red-500">
//         <h2 className="text-left ml-[30px] font-bold text-[#3D3D3D] mb-[20px]">
//           Personal Information
//         </h2>
//         <form
//           className="p-8 pt-0 space-y-6 bg-white rounded-lg"
//           onSubmit={handleSubmit}
//         >
//           <div className="grid grid-cols-2 gap-6 mb-[30px]">
//             {[
//               {
//                 id: "firstName",
//                 label: "First name",
//                 value: firstName,
//                 setValue: setFirstName,
//               },
//               {
//                 id: "lastName",
//                 label: "Last name",
//                 value: lastName,
//                 setValue: setLastName,
//               },
//               {
//                 id: "email",
//                 label: "Email address",
//                 value: email,
//                 setValue: setEmail,
//                 type: "email",
//               },
//               {
//                 id: "phone",
//                 label: "Phone Number",
//                 value: phone,
//                 setValue: setPhone,
//               },
//               {
//                 id: "username",
//                 label: "Username",
//                 value: username,
//                 setValue: setUsername,
//               },
//             ].map((field) => (
//               <div key={field.id}>
//                 <label
//                   htmlFor={field.id}
//                   className="block font-semibold text-left text-[#3D3D3D]"
//                 >
//                   * {field.label}
//                 </label>
//                 <input
//                   id={field.id}
//                   type={field.type || "text"}
//                   className="w-full p-2 border border-gray-300 rounded"
//                   placeholder={field.label}
//                   value={field.value}
//                   onChange={(e) => field.setValue(e.target.value)}
//                 />
//               </div>
//             ))}
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-green-600 rounded"
//           >
//             Save changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AccDetails;
