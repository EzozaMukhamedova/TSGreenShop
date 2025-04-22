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
