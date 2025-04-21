import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Modal from "../Modal.tsx";
import YourOrder from "../YourOrder";
import { useNavigate } from "react-router-dom";
import OrderConfirmation from "../OrderConfirmation/index.js";

const ProductCheckout = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    zip: "",
    state: "",
    email: "",
    phone: "",
    payment: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.firstName) newErrors.firstName = "Please enter First name";
    if (!form.lastName) newErrors.lastName = "Please enter Last name";
    if (!form.country) newErrors.country = "Please enter Country / Region";
    if (!form.city) newErrors.city = "Please enter Town / City";
    if (!form.street) newErrors.street = "Please enter Street Address";
    if (!form.zip) newErrors.zip = "Please enter Zip";
    if (!form.state) newErrors.state = "Please enter State";
    if (!form.email) newErrors.email = "Please enter Email address";
    if (!form.phone) newErrors.phone = "Please enter Phone Number";
    if (!form.payment) newErrors.payment = "Please enter Payment Method";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast.success("Order submitted successfully!", {
        position: "top-center",
        icon: "🛒",
        style: {
          background: "#ffffff",
          color: "#2f855a",
          border: "1px solid #46a358",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          padding: "14px 20px",
          fontSize: "15px",
        },
      });

      setShowModal(true);

      setForm({
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        street: "",
        zip: "",
        state: "",
        email: "",
        phone: "",
        payment: "",
      });
    }
  };

  const inputClass = (key: string) =>
    `border rounded px-3 py-2 w-full outline-none text-sm ${
      errors[key] ? "border-red-500" : "border-gray-300"
    }`;

  const errorText = (key: string) =>
    errors[key] ? (
      <p className="text-xs text-red-500 mt-1">{errors[key]}</p>
    ) : null;

  return (
    <div className="p-6 mt-[100px] max-w-5xl text-left">
      <ToastContainer closeButton={true} />

      <p className="text-sm text-gray-500 mb-4 text-left cursor-pointer">
        Home / <span className="text-black">Checkout</span>
      </p>
      <h2 className="text-2xl font-semibold mb-6 text-left">Billing Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          ["First name", "firstName", "Type your first name..."],
          ["Last name", "lastName", "Type your last name..."],
          ["Country / Region", "country", "Select your country..."],
          ["Town / City", "city", "Select your town..."],
        ].map(([label, key, placeholder]) => (
          <div key={key as string}>
            <label className="text-sm font-medium text-gray-500">
              * {label}
            </label>
            <input
              className={inputClass(key as string)}
              value={form[key as string]}
              onChange={(e) => handleChange(key as string, e.target.value)}
              placeholder={placeholder as string}
            />
            {errorText(key as string)}
          </div>
        ))}

        <div>
          <label className="text-sm font-medium text-gray-500">
            * Street Address
          </label>
          <input
            className={inputClass("street")}
            value={form.street}
            onChange={(e) => handleChange("street", e.target.value)}
            placeholder="House number and street name"
          />
          {errorText("street")}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">* Zip</label>
          <input
            className={inputClass("zip")}
            value={form.zip}
            onChange={(e) => handleChange("zip", e.target.value)}
            placeholder="Zip"
          />
          {errorText("zip")}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">* State</label>
          <input
            className={inputClass("state")}
            value={form.state}
            onChange={(e) => handleChange("state", e.target.value)}
            placeholder="State"
          />
          {errorText("state")}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            * Email address
          </label>
          <input
            type="email"
            className={inputClass("email")}
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Type your email..."
          />
          {errorText("email")}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            * Phone Number
          </label>
          <input
            type="tel"
            className={inputClass("phone")}
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Type your phone number..."
          />
          {errorText("phone")}
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-6 text-left">
        <label className="text-sm font-medium text-gray-500">
          * Payment Method
        </label>
        <div className="flex flex-col gap-2 mt-2">
          {[
            { id: "paypal", label: "PayPal / Visa / MasterCard" },
            { id: "bank", label: "Direct bank transfer" },
            { id: "cod", label: "Cash on delivery" },
          ].map(({ id, label }) => (
            <label
              key={id}
              className={`border px-3 py-2 rounded flex items-center gap-2 cursor-pointer ${
                form.payment === id ? "border-green-500" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={id}
                checked={form.payment === id}
                onChange={(e) => handleChange("payment", e.target.value)}
              />
              {label}
            </label>
          ))}
          {errorText("payment")}
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium">Order notes (optional)</label>
        <textarea
          className="w-full h-[200px] border rounded p-2 text-sm"
          rows={4}
          placeholder="Your order notes, thoughts, feedback, etc..."
        />
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-[#46a358] w-full text-white py-3 px-10 rounded text-lg hover:opacity-90 transition"
        >
          Place Order
        </button>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <OrderConfirmation
          onTrack={() => {
            setShowModal(false);
            navigate("/track-order");
          }}
        />
      </Modal>

      {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}> */}
      {/* <YourOrder /> */}
      {/* <OrderConfirmation /> */}
      {/* <div className="mt-6 text-center"> */}
      {/* <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => setShowModal(false)}
          >
          Tack Your Order
          </button> */}

      {/* <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => {
              setShowModal(false);
              navigate("/track-order");
            }}
          >
            Track Your Order
          </button> */}
      {/* </div> */}
      {/* </Modal> */}
    </div>
  );
};

export default ProductCheckout;
