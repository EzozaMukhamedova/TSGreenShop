import React from "react";
import ProductCheckout from "./ProductChekouts";
import YourOrder from "./YourOrder";

const ProductCheckounts = () => {
  return (
    <div className=" flex w-full">
      <ProductCheckout />
      <YourOrder />
    </div>
  );
};

export default ProductCheckounts;
