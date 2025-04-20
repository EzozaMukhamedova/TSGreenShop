// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import AccountSidebar from "../AccountSidebar/AccountSidebar";

// const Address = () => {
//   const { data } = useSelector((state: any) => state.shopping);
//   const [activeItem, setActiveItem] = useState("AccountDetails");

//   const subtotal = data.reduce(
//     (acc: number, item: any) => acc + item.price * item.count,
//     0
//   );
//   const discount = 0.0;
//   const shipping = 16;
//   const total = subtotal - discount + shipping;

//   return (
//     <>
//       {/* <div className="mt-[100px] mx-auto"> */}
//       <div className="flex w-[1100px] mx-auto mt-[100px] my-[50px] border">
//         <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
//         {/* <div className="w-[200px] border ">Devor </div> */}
//         <div className="w-full border  rounded-md p-4 space-y-4 mt-[100px] ml-[20px]">
//           <h3 className="text-lg font-semibold text-left">Address</h3>

//           <div className="space-y-3">
//             {data.map((item: any) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between items-start bg-[#f9f9f9] p-2 rounded"
//               >
//                 <div className="flex gap-2 text-left">
//                   {/* <img
//                 src={item.main_image}
//                 alt={item.title}
//                 className="w-[60px] h-[60px] object-cover"
//               /> */}
//                   <div>
//                     <p className="font-medium">{item.title}</p>
//                     <p className="text-xs text-gray-500">SKU: {item._id}</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-600">(x {item.count})</p>
//                   <p className="text-sm font-semibold">
//                     ${(item.price * item.count).toFixed(2)}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Address;

import React, { useState, useEffect } from "react";
import AccountSidebar from "../AccountSidebar/AccountSidebar";

const Address: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [activeItem, setActiveItem] = useState("Address");

  useEffect(() => {
    const userData = localStorage.getItem("loggedInUser");

    if (userData) {
      const user = JSON.parse(userData);
      setFirstName(user.firstName || user.name || "");
      setLastName(user.lastName || user.surname || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setUsername(user.username || "");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedUserData = { firstName, lastName, email, phone, username };
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
    alert("Ma'lumotlar yangilandi!");
  };

  //   return (
  //     <>
  //       <div className="flex w-full mt-[100px] px-[20px] border border-blue-600 ">
  //         <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />

  //         <div className="w-3/4 mx-auto border border-red-500">
  //           <h2 className="text-left ml-[30px] font-bold text-[#3D3D3D] mb-[20px]">
  //             Billing Address
  //           </h2>
  //           <p className="text-left ml-[30px] mb-[20px]">
  //             {" "}
  //             The following addresses will be used on the checkout page by
  //             default.
  //           </p>

  //           <form
  //             className="p-8 pt-0 space-y-6 bg-white rounded-lg"
  //             onSubmit={handleSubmit}
  //           >
  //             <div className="grid grid-cols-2 gap-6 mb-[30px]">
  //               {[
  //                 {
  //                   id: "firstName",
  //                   label: "First name",
  //                   value: firstName,
  //                   setValue: setFirstName,
  //                 },
  //                 {
  //                   id: "lastName",
  //                   label: "Last name",
  //                   value: lastName,
  //                   setValue: setLastName,
  //                 },
  //                 {
  //                   id: "email",
  //                   label: "Email address",
  //                   value: email,
  //                   setValue: setEmail,
  //                   type: "email",
  //                 },
  //                 {
  //                   id: "phone",
  //                   label: "Phone Number",
  //                   value: phone,
  //                   setValue: setPhone,
  //                 },
  //                 {
  //                   id: "username",
  //                   label: "Username",
  //                   value: username,
  //                   setValue: setUsername,
  //                 },
  //               ].map((field) => (
  //                 <div key={field.id}>
  //                   <label
  //                     htmlFor={field.id}
  //                     className="block font-semibold text-left text-[#3D3D3D]"
  //                   >
  //                     * {field.label}
  //                   </label>
  //                   <input
  //                     id={field.id}
  //                     type={field.type || "text"}
  //                     className="w-full p-2 border border-gray-300 rounded"
  //                     placeholder={field.label}
  //                     value={field.value}
  //                     onChange={(e) => field.setValue(e.target.value)}
  //                   />
  //                 </div>
  //               ))}
  //             </div>
  //             <button
  //               type="submit"
  //               className="w-full py-2 text-white bg-green-600 rounded"
  //             >
  //               Save changes
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     </>
  //   );

  return (
    <div className="flex w-full mt-[100px] px-[20px]">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="w-full bg-white p-6 rounded-lg shadow ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-left  font-bold text-[#3D3D3D] mb-[20px]">
            Billing Address
          </h2>
          <button className="text-green-600 font-medium hover:underline">
            Add
          </button>
        </div>
        <p className="text-left text-sm text-gray-600 mb-6">
          The following addresses will be used on the checkout page by default.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-2 gap-6">
            {/* Row 1 */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * First name
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * Last name
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * Country / Region
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Select your country..."
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * Town / City
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Select your town..."
              />
            </div>

            {/* Row 3 */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * Street Address
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="House number and street name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                Extra address
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Appartment, suite, unit, etc. (optional)"
              />
            </div>

            {/* Row 4 */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * State
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Select a state..."
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * Zip
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Zip code"
              />
            </div>

            {/* Row 5 */}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * Email address
              </label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">
                * Phone Number
              </label>
              <div className="flex items-center gap-2">
                <span className="px-3 py-2 border rounded bg-gray-100 text-sm">
                  +998
                </span>
                <input
                  type="tel"
                  className="w-full border rounded px-3 py-2 text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>

          {/* Save button */}
          <div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-6 rounded"
            >
              Save Address
            </button>
          </div>
        </form>

        {/* Shipping address */}
        <div className="mt-10  flex justify-between">
          <p className="text-gray-600 text-sm mb-2 text-left ">
            <span className="font-bold"> Shipping Address</span> <br />
            <span className="">
              {" "}
              You have not set up this type of address yet.
            </span>
          </p>

          <div className="text-left">
            <div className="flex items-center gap-2 text-right">
              <input type="checkbox" />
              <label className="text-sm">Same as billing address</label> <br />
            </div>
            <button className=" text-green-600 text-sm font-medium mt-2 hover:underline">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
