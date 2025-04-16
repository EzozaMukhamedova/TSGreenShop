// import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   decreaseCountFromShopping,
//   deleteFlowerFromShopping,
//   increaseCountFromShopping,
// } from "../../../../redux/ShoppingSlice";
// import { DeleteOutlined } from "lucide-react";
// import { Tooltip } from "antd";

// const Card = ({ title, price, _id, count, main_image }) => {
//   const dispatch = useDispatch();
//   return (
//     <div className="bg-[#fbfbfb] min-h-[70px] w-full flex items-center py-2 border-red-500 border" >
//       <div className="w-[40%] flex items-center gap-2">
//         <img src={main_image} alt={title} className="w-[70px] h-[70px]" />
//         <div className="">
//           <h3>{title}</h3>
//           <p className="font-light text-[14px]">SKU: {_id}</p>
//         </div>
//       </div>
//       <div className="w-[20%] flex items-center text-[#7272772]">${price}</div>
//       <div className="w-[20%] flex items-center">
//         <div className="flex gap-3">
//           <button
//             onClick={() => dispatch(decreaseCountFromShopping({ _id }))}
//             className="w-[25px] h-[25px] bg-[#46a358] rounded-full text-white"
//           >
//             -
//           </button>
//           <h3 className="font-medium text-[18px]">{count}</h3>
//           <button
//             onClick={() => dispatch(increaseCountFromShopping({ _id }))}
//             className="w-[25px] h-[25px] bg-[#46a358] rounded-full text-white"
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div className="w-[20%] flex items-center justify-between pr-[10px]">
//         <h3>${Number(Number(price) * Number(count)).toFixed(2)}</h3>
//         <Tooltip title="Delete">
//           <DeleteOutlined
//             onClick={() => {
//               dispatch(deleteFlowerFromShopping({ _id }));
//             }}
//             className="cursor-pointer"
//           />
//         </Tooltip>
//       </div>
//     </div>
//   );
// };

// export default Card;
///222222222222

// import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   decreaseCountFromShopping,
//   deleteFlowerFromShopping,
//   increaseCountFromShopping,
// } from "../../../../redux/ShoppingSlice";
// import { Trash2 } from "lucide-react"; // <-- to‘g‘ri ikon import
// import { Tooltip } from "antd";

// interface FlowerItems {
//     title: string;
//     price: number;
//     _id: string;
//     count: number;
//     main_image: string;
//   }

// const Card = ({ title, price, _id, count, main_image } : FlowerItems) => {
//   const dispatch = useDispatch();

//   return (
//     <div className="bg-[#fbfbfb] w-full flex items-center py-2">
//       <div className="w-[40%] flex items-center gap-2">
//         <img src={main_image} alt={title} className="w-[70px] h-[70px]" />
//         <div>
//           <h3>{title}</h3>
//           <p className="font-light text-[14px]">SKU: {_id}</p>
//         </div>
//       </div>

//       <div className="w-[20%] flex items-center text-[#727277]">${price}</div>

//       <div className="w-[20%] flex items-center">
//         <div className="flex gap-3">
//           <button
//             onClick={() => dispatch(decreaseCountFromShopping({ _id }))}
//             className="w-[25px] h-[25px] bg-[#46a358] rounded-full text-white"
//           >
//             -
//           </button>
//           <h3 className="font-medium text-[18px]">{count}</h3>
//           <button
//             onClick={() => dispatch(increaseCountFromShopping({ _id }))}
//             className="w-[25px] h-[25px] bg-[#46a358] rounded-full text-white"
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <div className="w-[20%] flex items-center justify-between pr-[10px]">
//         <h3>${(price * count).toFixed(2)}
//         </h3>
//         <Tooltip title="Delete">
//           <Trash2
//             onClick={() => dispatch(deleteFlowerFromShopping({ _id }))}
//             className="cursor-pointer text-red-500 hover:scale-110 transition"
//             size={20}
//           />
//         </Tooltip>
//       </div>
//     </div>
//   );
// };

// export default Card;

////////////////333333333333333

import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseCountFromShopping,
  deleteFlowerFromShopping,
  increaseCountFromShopping,
} from "../../../../redux/ShoppingSlice";
import { Trash2 } from "lucide-react";
import { Tooltip } from "antd";

interface FlowerItem {
  title: string;
  price: number;
  _id: string;
  count: number;
  main_image: string;
}

const Card = ({ title, price, _id, count, main_image }: FlowerItem) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#fbfbfb] w-full flex items-center py-2">
      <div className="w-[40%] flex items-center gap-2">
        <img
          src={main_image}
          alt={title || "Flower"}
          className="w-[70px] h-[70px]"
        />
        <div className="text-left">
          <h3 className="font-bold">{title}</h3>
          <p className="font-light text-[14px]">SKU: {_id}</p>
        </div>
      </div>

      <div className="w-[20%] flex items-center text-[#727277]">${price}</div>

      <div className="w-[20%] flex items-center">
        <div className="flex gap-3">
          <button
            onClick={() => dispatch(decreaseCountFromShopping({ _id }))}
            className="w-[25px] h-[25px] bg-[#46a358] rounded-full text-white"
          >
            -
          </button>
          <h3 className="font-medium text-[18px]">{count}</h3>
          <button
            onClick={() => dispatch(increaseCountFromShopping({ _id }))}
            className="w-[25px] h-[25px] bg-[#46a358] rounded-full text-white"
          >
            +
          </button>
        </div>
      </div>

      <div className="w-[20%] flex items-center justify-between pr-[10px]">
        <h3>${(price * count).toFixed(2)}</h3>
        <Tooltip title="Delete">
          <Trash2
            onClick={() => dispatch(deleteFlowerFromShopping({ _id }))}
            className="cursor-pointer text-red-500 hover:scale-110 transition"
            size={20}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Card;
