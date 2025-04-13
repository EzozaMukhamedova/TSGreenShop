import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const api = import.meta.env.VITE_API;
const accessToken = "64bebc1e2c6d3f056a8c85b7";

type Product = {
  _id: string;
  title: string;        
  main_image: string;
  price: number;
  description: string;
};


const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `${api}/flower/product/${productId}?access_token=${accessToken}`
        );
        console.log("API response:", response.data);
        setProduct(response.data);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div className="mt-[500px]">
      <h1>{product?.title}</h1>
      <img src={product?.main_image} alt={product?.title} />
      <p>Price: ${product?.price}</p>
      <p>Description: {product?.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
