// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const api = import.meta.env.VITE_API;
// const accessToken = "64bebc1e2c6d3f056a8c85b7";

// type Product = {
//   _id: string;
//   title: string;
//   main_image: string;
//   detailed_images: string[];
//   price: number;
//   description: string;
// };

// const ProductDetailsPage = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(
//           `${api}/flower/category/house-plants/${productId}?access_token=${accessToken}`
//         );
//         console.log("API response:", response.data);
//         setProduct(response.data.data);
//       } catch (err: any) {
//         setError(err.message || "An error occurred.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [productId]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!product) return <div>No product found.</div>;

//   return (
//     <div className="mt-[100px] border">
//       <h1>{product?.title}</h1>

//       <img src={product?.main_image} alt={product?.title} />
//       {product.detailed_images.map((url, index) => (
//         <img key={index} src={url} alt={`Image ${index + 1}`} />
//       ))}

//       <p>Price: ${product?.price}</p>
//       <p>Description: {product?.description}</p>
//     </div>
//   );
// };

// export default ProductDetailsPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = import.meta.env.VITE_API;
const accessToken = "64bebc1e2c6d3f056a8c85b7";

type Product = {
  _id: string;
  title: string;
  main_image: string;
  detailed_images: string[];
  price: number;
  description: string;
};

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${api}/flower/category/house-plants/${productId}?access_token=${accessToken}`
        );
        const productData = response.data.data;
        setProduct(productData);
        setMainImage(productData.main_image || productData.detailed_images[0]);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (isLoading) return <div className="mt-20 text-center">Loading...</div>;
  if (error)
    return <div className="mt-20 text-red-500 text-center">Error: {error}</div>;
  if (!product)
    return <div className="mt-20 text-center">No product found.</div>;

  return (
    <div className="flex gap-8 px-16 mt-20">
      {/* Left Thumbnails */}
      <div className="flex flex-col gap-4">
        {product.detailed_images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className="w-24 h-24 object-cover border cursor-pointer hover:border-green-500"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <img
          src={mainImage}
          alt={product.title}
          className="w-[400px] h-[500px] object-contain mx-auto"
        />
      </div>

      {/* Product Info */}
      <div className="w-[450px]">
        <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
        <p className="text-green-600 text-xl font-bold mb-4">
          ${product.price}
        </p>

        <p className="font-semibold mb-2">Short Description:</p>
        <p className="text-gray-700 mb-4 line-clamp-4">{product.description}</p>

        <p className="font-semibold mb-2">Size:</p>
        <div className="flex gap-2 mb-6">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="w-8 h-8 border border-gray-400 rounded-full text-sm hover:bg-green-500 hover:text-white"
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <button className="w-8 h-8 border rounded hover:bg-gray-200">
            -
          </button>
          <span>0</span>
          <button className="w-8 h-8 border rounded hover:bg-gray-200">
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mb-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded">
            BUY NOW
          </button>
          <button className="border border-green-600 px-5 py-2 rounded hover:bg-green-100">
            ADD TO CART
          </button>
          <button className="border p-2 rounded hover:bg-green-100">
            <Heart className="w-5 h-5 text-green-600" />
          </button>
        </div>

        {/* Meta Info */}
        <div className="mt-6 space-y-2 text-sm text-left">
          {/* SKU */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium w-[90px]">SKU:</span>
            <span className="text-gray-800">{product._id}</span>
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium w-[90px]">
              Category:
            </span>
            <span className="uppercase text-green-600 font-semibold">
              {product.category}
            </span>
          </div>

          {/* Tags (badge-style) */}
          <div className="flex items-start gap-2">
            <span className="text-gray-500 font-medium w-[90px]">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {["Home", "Garden", "Plants"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] bg-green-100 text-green-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
