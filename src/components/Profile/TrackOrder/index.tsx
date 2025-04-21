// import React from "react";

// const TrackOrder = () => {
//   return (
//     <div className="mt-[200px]">
//       <h2>Track Order</h2>
//     </div>
//   );
// };

// export default TrackOrder;
//////22222

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import AccountSidebar from "../AccountSidebar/AccountSidebar";

// const TrackOrder = () => {
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
//       <div className="flex w-full mt-[100px] px-[20px] border border-blue-600 ">
//         <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
//         <div className="w-full border  rounded-md p-4 space-y-4">
//           <h3 className="text-lg font-semibold text-left">Track your Orders</h3>
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

//           {/* <div className="border-t pt-4 space-y-1 text-sm">
//         <div className="flex justify-between">
//           <span>Subtotal:</span>
//           <span>${subtotal.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-red-500">
//           <span>Coupon Discount:</span>
//           <span>- ${discount.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Shipping:</span>
//           <span>${shipping.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-green-600 font-bold pt-2 text-base">
//           <span>Total</span>
//           <span>${total.toFixed(2)}</span>
//         </div>
//       </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TrackOrder;

////22

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
