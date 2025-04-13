// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Link, useSearchParams } from "react-router-dom";
// import { ShoppingCart, Heart, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import { RingLoader } from "react-spinners";

// const api = import.meta.env.VITE_API;

// const fetchFlowers = async ({ queryKey }) => {
//   const [_key, category, range_min, range_max] = queryKey;
//   const { data } = await axios.get(
//     `${api}/flower/category/${category}?access_token=64bebc1e2c6d3f056a8c85b7&range_min=${range_min}&range_max=${range_max}`
//   );
//   return data;
// };

// function MainMapping() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const category = searchParams.get("category") || "house-plants";
//   const navigate = useNavigate();

//   const range_min = searchParams.get("range_min") || 0;
//   const range_max = searchParams.get("range_max") || 1000;

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["flower", category, range_min, range_max],
//     queryFn: ({ queryKey }) => fetchFlowers({ queryKey }),
//   });

//   const handleProductClick = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   return (
//     <div className="p-4 ml-[50px] ">
//       {error && (
//         <p className="text-center text-red-500">Error: {error.message}</p>
//       )}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
//         {isLoading
//           ? [...Array(9)].map(
//               (
//                 _,
//                 index //loading
//               ) => (
//                 <div
//                   key={index}
//                   className="w-[250px] h-[330px] p-3 bg-[#F5F5F580] flex items-center justify-center"
//                   // onClick={() => handleProductClick(product.id)}
//                 >
//                   <RingLoader color="#36D7B7" />
//                 </div>
//               )
//             )
//           : data?.data?.map(
//               (
//                 { title, price, category, main_image, discount_price },
//                 index
//               ) => {
//                 return (
//                   // <Link to={`/products/${_id}`} key={index}>
//                   <div
//                     key={index}
//                     className="border p-3 w-[250px] bg-[#FBFBFB] transition duration-300 ease-in-out transform hover:shadow-lg hover:border-green-400 hover:border-t-2 "
//                     onClick={() => navigate("/CategoriesMain")}
//                     // onClick={() => handleProductClick(id)}
//                   >
//                     <h2 className="flex translate-x-[-12px] bg-[#46A358] w-[80px] h-[30px] justify-center items-center text-center text-white transition duration-500 ease-in-out hover:rotate-12 cursor-pointer">
//                       13% OFF
//                     </h2>
//                     <div className="relative w-[230px] h-[250px] mx-auto group bg-[#FBFBFB]">
//                       <img
//                         src={main_image || "placeholder.jpg"}
//                         alt={title || "Unnamed"}
//                         className="object-cover w-full h-full p-[20px] cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
//                       />
//                       <div className="absolute flex items-center gap-3 transition-opacity duration-300 transform -translate-x-1/2 opacity-0 bottom-3 left-1/2 group-hover:opacity-100">
//                         <button className="p-2 bg-white rounded-full shadow hover:bg-[#46A358]">
//                           <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-white" />
//                         </button>
//                         <button className="p-2 bg-white rounded-full shadow hover:bg-[#46A358]">
//                           <Heart className="w-5 h-5 text-gray-600 hover:text-white" />
//                         </button>
//                         <button className="p-2 bg-white rounded-full shadow hover:bg-[#46A358]">
//                           <Search className="w-5 h-5 text-gray-600 hover:text-white" />
//                         </button>
//                       </div>
//                     </div>
//                     <div className="mt-3">
//                       <h3 className="text-lg font-semibold text-left text-gray-900">
//                         {title || "Unnamed"}
//                       </h3>
//                       <div className="flex mt-1 space-x-2">
//                         <span className="text-lg font-bold text-green-600">
//                           ${price || "N/A"}
//                         </span>
//                         {discount_price && discount_price !== price && (
//                           <span className="text-lg text-gray-400 line-through">
//                             ${discount_price}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   // </Link>
//                 );
//               }
//             )}
//       </div>
//     </div>
//   );
// }

// export default MainMapping;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { useAppDispatch } from "../../../../redux/store/hooks";
import { addToCart } from "../../../../redux/store/cartSlice";
import { toast } from "react-toastify";

const api = import.meta.env.VITE_API;

type Product = {
  _id: string;
  title: string;
  price: number;
  category: string;
  main_image: string;
  discount_price?: number;
};

const handleAddToCart = () => {
  dispatch(addToCart());
  toast.success("Added to your shopping cart!");
};

const handleAddToWishlist = () => {
  toast.info("Added to your wishlist!");
};

const fetchFlowers = async ({
  queryKey,
}: {
  queryKey: [string, string, string | number, string | number];
}): Promise<{ data: Product[] }> => {
  const [_key, category, range_min, range_max] = queryKey;
  const { data } = await axios.get(
    `${api}/flower/category/${category}?access_token=64bebc1e2c6d3f056a8c85b7&range_min=${range_min}&range_max=${range_max}`
  );
  return data;
};

function MainMapping() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "house-plants";
  const range_min = searchParams.get("range_min") || 0;
  const range_max = searchParams.get("range_max") || 1000;
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["flower", category, range_min, range_max],
    queryFn: fetchFlowers,
  });

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to your shopping cart!`);
  };

  const handleAddToWishlist = (product: Product) => {
    toast.info(`${product.title} added to your wishlist!`);
  };

  if (isLoading) return <RingLoader />;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="p-4 ml-[50px]">
      {error && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {isLoading
          ? [...Array(9)].map((_, index) => (
              <div
                key={index}
                className="w-[250px] h-[330px] p-3 bg-[#F5F5F580] flex items-center justify-center"
              >
                <RingLoader color="#36D7B7" />
              </div>
            ))
          : data?.data?.map((product, index) => (
              <div
                key={index}
                className="border p-3 w-[250px] bg-[#FBFBFB] transition duration-300 ease-in-out transform hover:shadow-lg hover:border-green-400 hover:border-t-2"
              >
                <h2 className="flex translate-x-[-12px] bg-[#46A358] w-[80px] h-[30px] justify-center items-center text-white">
                  {product.discount_price &&
                  product.discount_price < product.price
                    ? Math.round(
                        ((product.price - product.discount_price) /
                          product.price) *
                          100
                      ) + "% OFF"
                    : ""}
                </h2>
                <div className="relative w-[230px] h-[250px] mx-auto group bg-[#FBFBFB]">
                  <img
                    src={product.main_image}
                    alt={product.title}
                    className="object-cover w-full h-full p-[20px] transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute flex items-center gap-3 opacity-0 bottom-3 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      // onClick={handleAddToCart}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="p-2 bg-white rounded-full shadow hover:bg-[#46A358]"
                    >
                      <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-white" />
                    </button>
                    <button
                      // onClick={handleAddToWishlist}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToWishlist(product);
                      }}
                      className="p-2 bg-white rounded-full shadow hover:bg-[#46A358]"
                    >
                      <Heart className="w-5 h-5 text-gray-600 hover:text-white" />
                    </button>

                    <button
                      onClick={() => handleProductClick(product._id)}
                      className="p-2 bg-white rounded-full shadow hover:bg-[#46A358]"
                    >
                      <Search className="w-5 h-5 text-gray-600 hover:text-white" />
                    </button>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-left text-gray-900">
                    {product.title}
                  </h3>
                  <div className="flex mt-1 space-x-2">
                    <span className="text-lg font-bold text-green-600">
                      ${product.discount_price ?? product.price}
                    </span>
                    {product.discount_price &&
                      product.discount_price < product.price && (
                        <span className="text-lg text-gray-400 line-through">
                          ${product.price}
                        </span>
                      )}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default MainMapping;
