import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index";
import AccountSidebar from "../AccountSidebar/AccountSidebar";
import { useState } from "react";

const Wishlist = () => {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const [activeItem, setActiveItem] = useState("Wishlist");

  return (
    <div className="flex w-full mt-[100px] px-[20px]">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="w-full bg-white rounded-md p-6 ">
        <h2 className="text-left  font-bold text-[#3D3D3D] mb-[20px]">
          Wishlist
        </h2>

        {wishlistItems.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">
            Your wishlist is empty.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlistItems.map((product) => (
              <div
                key={product._id}
                className="border p-3 bg-gray-50 rounded hover:shadow"
              >
                <img
                  src={product.main_image}
                  alt={product.title}
                  className="w-full h-[180px] object-cover rounded mb-2"
                />
                <h4 className="text-sm font-semibold">{product.title}</h4>
                <p className="text-green-600 font-medium">
                  ${product.discount_price ?? product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
