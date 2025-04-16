import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardTotal = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    toast.error("Coupon not found!", {
      position: "top-center",
    });
    setCouponCode("");
  };

  return (
    <div className="w-full max-w-[400px]  p-6   rounded-md space-y-4 text-[#3D3D3D] font-sans">
      <ToastContainer />
      <h3 className="text-lg font-semibold text-left">Card Total</h3>
      <div className="border-t border-[#46a358]" />

      {/* Coupon Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter coupon code here..."
          className="flex-1 border border-[#46a358] rounded px-3 py-2 outline-none"
        />
        <button
          onClick={handleApplyCoupon}
          className="bg-[#46a358] text-white px-4 rounded"
        >
          Apply
        </button>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between">
        <span>Subtotal:</span>
        <span className="font-semibold">$185.94</span>
      </div>

      {/* Coupon Discount */}
      <div className="flex justify-between">
        <span>Coupon Discount:</span>
        <span className="text-red-500">- $(0.00)</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between">
        <span>Shipping:</span>
        <span>$16</span>
      </div>

      {/* Total */}
      <div className="flex justify-between font-bold text-lg mt-2">
        <span>Total</span>
        <span className="text-[#46a358]">$185.94</span>
      </div>

      {/* Proceed to Checkout */}
      <button
        onClick={() => navigate("/product-checkout")}
        className="w-full bg-[#46a358] text-white py-2 rounded mt-4"
      >
        Proceed to Checkout
      </button>

      {/* Continue Shopping */}
      <button
        onClick={() => navigate("/")}
        className="w-full text-[#46a358] font-medium mt-2 underline"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default CardTotal;
