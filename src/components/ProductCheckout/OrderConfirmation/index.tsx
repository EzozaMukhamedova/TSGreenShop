import React from "react";
import { useSelector } from "react-redux";

const OrderConfirmation = ({ onTrack }: { onTrack?: () => void }) => {
  const { data } = useSelector((state: any) => state.shopping);

  const subtotal = data.reduce(
    (acc: number, item: any) => acc + item.price * item.count,
    0
  );
  const shipping = 16;
  const total = subtotal + shipping;

  const orderNumber = Math.floor(Math.random() * 1000000000000);
  const date = new Date().toDateString();

  return (
    <div className="max-w-[550px] w-full mx-auto bg-white border rounded-md p-6 ">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-bold text-gray-700 text-lg">
            Order Confirmation
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Order Number{" "}
            <span className="font-medium text-black block">{orderNumber}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Date <span className="font-medium text-black block">{date}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Total{" "}
            <span className="font-medium text-black block">
              ${total.toFixed(2)}
            </span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Payment Method{" "}
            <span className="font-medium text-black block">
              Cash on delivery
            </span>
          </p>
        </div>
      </div>

      <h4 className="border-t pt-3 font-semibold text-gray-700 text-sm">
        Order Details
      </h4>
      <div className="divide-y mt-3">
        {data.map((item: any) => (
          <div key={item._id} className="flex justify-between py-3 items-start">
            <div className="flex gap-3">
              <img
                src={item.main_image}
                alt={item.title}
                className="w-[50px] h-[50px] object-cover rounded-md"
              />
              <div className="text-left">
                <p className="font-semibold text-sm text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">
                  SKU: {item._id.slice(0, 25)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">(x {item.count})</p>
              <p className="text-sm font-semibold text-gray-800">
                ${(item.price * item.count).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span className="text-green-600 font-semibold">
            ${shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between font-bold text-base pt-2">
          <span>Total</span>
          <span className="text-green-600">${total.toFixed(2)}</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-6">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>

      {onTrack && (
        <button
          onClick={onTrack}
          className="mt-5 w-full bg-[#46A358] hover:bg-green-700 text-white py-2 rounded font-medium"
        >
          Track your order
        </button>
      )}
    </div>
  );
};

export default OrderConfirmation;
