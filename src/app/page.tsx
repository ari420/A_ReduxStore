"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { fetchProducts } from "@/features/counter/counterSlice";
import { AppDispatch } from "@/app/store/store";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer/page";
import Header from "./header/page"; // Import Header component

export default function Home() {
  const dispatch = useDispatch();
  const pro = useSelector((state: RootState) => state.product.items);
  const status = useSelector((state: RootState) => state.product.status);
  const error = useSelector((state: RootState) => state.product.error);

  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products when component mounts
  useEffect(() => {
    (dispatch as AppDispatch)(fetchProducts());
  }, [dispatch]);

  // Handle search query change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter products based on search query
  const filteredProducts = pro.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-white text-black dark:bg-slate-900 dark:text-white">
      {/* Pass handleSearch to Header */}
      <Header onSearch={handleSearch} />

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Loading State */}
        {status === "loading" && (
          <div className="text-black text-lg dark:text-white">
            Loading products...
          </div>
        )}

        {/* Error State */}
        {status === "failed" && (
          <div className="text-black text-lg dark:text-white">
            Error: {error}
          </div>
        )}

        {/* No Products State */}
        {status === "succeeded" && filteredProducts.length === 0 && (
          <div className="text-black text-lg dark:text-white">
            No products available
          </div>
        )}

        {/* Display Products */}
        {status === "succeeded" &&
          filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="m-4 p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-sm w-full dark:bg-gray-800 dark:text-white"
            >
              {/* Product Image */}
              <div className="flex justify-center mb-6 w-full h-72">
                <Image
                  src={product.imag as string} // Assuming `product.image` contains the URL
                  alt={product.name as string}
                  className=" h-full w-full rounded-lg"
                  layout="intrinsic"
                  height={800}
                  width={1200}
                />
              </div>

              {/* Product Title */}
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                {product.name}
              </h3>
              <p className="mb-4 dark:text-gray-400">{product.info}</p>

              {/* Read More Button */}
              <Link href={`/proReadMore/${product.id}`}>
                <button className="text-blue-500 text-sm hover:underline dark:text-blue-400">
                  Read More
                </button>
              </Link>

              {/* Product Price */}
              <p className="font-semibold mt-4 text-lg dark:text-white">
                Price: ${product.price}
              </p>
            </div>
          ))}
      </div>
      <Footer />
    </main>
  );
}
