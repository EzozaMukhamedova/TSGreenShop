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
