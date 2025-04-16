// import { Button, Card, Empty } from "antd";
import { Button, Empty } from "antd";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Products = () => {
  const { data } = useSelector((state) => state.shopping);
  interface FlowerItem {
    title: string;
    price: number;
    _id: string;
    count: number;
    main_image: string;
  }
  const navigate = useNavigate();
  return (
    <div className="w-full max-lg:w-[100%] mt-[15px] ">
      <div className="pb-[11px] border-b border-[#46a358] flex max-lg:hidden  items-center space-y-7 text-lg font-semibold ">
        <h3 className="w-[40%] mr-[120px]  mt-[25px]">Products</h3>
        <h3 className="w-[40%] ml-[20px] ">Price</h3>
        <h3 className="w-[40%] ml-[20px]">Quantity</h3>
        <h3 className="w-[40%] mr-[90px]">Total</h3>
      </div>
      <div className="flex flex-col gap-5 mt-[11px]">
        {data.length ? (
          data.map((value: FlowerItem) => <Card key={value._id} {...value} />)
        ) : (
          <div className="w-[100%] flex flex-col items-center">
            <Empty />
            <Button
              onClick={() => navigate("/")}
              className="h-[40px] px-[10px] mt-[10px]"
            >
              LET'S SHOP
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
