import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountSidebar from "../AccountSidebar/AccountSidebar";
import { format } from "date-fns";

const TrackOrder = () => {
  const { data } = useSelector((state: any) => state.shopping);
  const [activeItem, setActiveItem] = useState("TrackOrder");

  const orders = data.map((item: any, index: number) => ({
    id: `${item._id.slice(0, 12)}${index}`,
    date: new Date().toDateString(),
    total: (item.price * item.count).toFixed(2),
  }));

  return (
    <div className="flex w-full mt-[100px] px-[20px] text-left">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="w-full bg-white rounded-md p-6  ">
        <h2 className="text-left  font-bold text-[#3D3D3D] mb-[20px]">
          Track your Orders
        </h2>
        <div className="space-y-6">
          {orders.map((order: { id: string; date: string; total: string }) => (
            <div
              key={order.id}
              className="grid grid-cols-4 items-center gap-4 border-b pb-4 text-sm 
             hover:bg-[#e8ebec] transition-colors duration-200 rounded-md px-3 py-2 cursor-pointer"
            >
              <div>
                <p className="text-gray-500 font-medium">Order Number</p>
                <p className="font-semibold text-gray-800">{order.id}</p>
              </div>

              <div>
                <p className="text-gray-500 font-medium">Date</p>
                <p className="font-semibold text-gray-800">
                  {format(new Date(order.date), "EEE MMM dd yyyy")}
                </p>
              </div>

              <div>
                <p className="text-gray-500 font-medium">Total</p>
                <p className="font-semibold text-gray-800">
                  ${order.total || "-"}
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-500 font-medium">More</p>
                <button className="text-green-600 hover:underline font-medium">
                  Get details
                </button>
              </div>
            </div>
          ))}

          {orders.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              No orders yet...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
