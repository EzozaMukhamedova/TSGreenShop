import React from "react";
import Products from "./Products";
import CardTotal from "./CardTotal";

const ProductCard = () => {
  return (
    <div className="flex  mt-[100px]">
      <Products />
      <CardTotal />
    </div>
  );
};

export default ProductCard;
