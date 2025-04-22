import React from "react";
import { useSelector } from "react-redux";

const YourOrder = () => {
  const { data } = useSelector((state: any) => state.shopping);

  const subtotal = data.reduce(
    (acc: number, item: any) => acc + item.price * item.count,
    0
  );
  const discount = 0.0;
  const shipping = 16;
  const total = subtotal - discount + shipping;

  return (
    <div className="w-full lg:w-[450px]  rounded-md p-4 space-y-4 mt-[100px] ml-[20px]">
      <h3 className="text-lg font-semibold text-left">Your Order</h3>

      <div className="space-y-3">
        {data.map((item: any) => (
          <div
            key={item._id}
            className="flex justify-between items-start bg-[#f9f9f9] p-2 rounded"
          >
            <div className="flex gap-2 text-left">
              <img
                src={item.main_image}
                alt={item.title}
                className="w-[60px] h-[60px] object-cover"
              />
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">SKU: {item._id}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">(x {item.count})</p>
              <p className="text-sm font-semibold">
                ${(item.price * item.count).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-red-500">
          <span>Coupon Discount:</span>
          <span>- ${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-green-600 font-bold pt-2 text-base">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
