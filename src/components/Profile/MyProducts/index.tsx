import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountSidebar from "../AccountSidebar/AccountSidebar";
// import EmptyIcon from "../../../assets/images/emptyBox.svg";

const MyProducts = () => {
  const { data } = useSelector((state: any) => state.shopping);
  const [activeItem, setActiveItem] = useState("MyProducts");

  return (
    <div className="flex w-full mt-[100px] px-[20px]">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="w-full bg-white p-6 rounded-md shadow ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-left  font-bold text-[#3D3D3D] mb-[20px]">
            Products
          </h2>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded">
            Add new
          </button>
        </div>

        <div className="grid grid-cols-3 text-[16px] font-semibold text-gray-600 border-b border-green-500 pb-2 mb-8">
          <div>Products</div>
          <div>Price</div>
          <div>Total</div>
        </div>

        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12 text-gray-500">
            {/* <img
              src={EmptyIcon}
              alt="No products"
              className="w-20 h-20 opacity-70 mb-2"
            /> */}
            <p className="text-sm">No products yet...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {data.map((item: any) => (
              <div
                key={item._id}
                className="grid grid-cols-3 items-center text-sm border-b pb-2 hover:bg-[#e8ebec] transition-colors duration-200 px-2 py-2 rounded cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.main_image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span>{item.title}</span>
                </div>
                <div>${item.price.toFixed(2)}</div>
                <div>${(item.price * item.count).toFixed(2)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
