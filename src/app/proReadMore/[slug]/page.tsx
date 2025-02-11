"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/footer/page";
import { addToCart } from "@/features/counter/counterSlice";
import Header from "@/app/header/page";

interface Product {
  id: number;
  name: string;
  info: string;
  price: number;
  imag: string;
  count: number;
}

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.product.items);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    if (slug) {
      const foundProduct = products.find((p) => p.id.toString() === slug);
      setProduct(foundProduct || null);
    }
  }, [slug, products]);

  const handleAddToCart = () => {
    if (!product) return;

    const alreadyInCart = cartItems.some((item) => item.id === product.id);

    if (alreadyInCart) {
      setMessage("This product is already in your cart!");
    } else {
      dispatch(addToCart(product));
      setMessage("Product added to cart successfully!");
    }

    setTimeout(() => setMessage(null), 3000); // Hide message after 3 seconds
  };

  if (!product)
    return (
      <p className="text-center text-gray-900 dark:text-white mt-4">
        Product not found
      </p>
    );

  return (
    <main className="bg-slate-50 text-gray-900 dark:bg-black dark:text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-center bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <Image
              src={product.imag as string}
              alt={product.name}
              className="object-cover h-80 w-full rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105"
              layout="intrinsic"
              height={800}
              width={1200}
            />
          </div>

          <div className="w-full md:w-1/2 lg:w-2/3 md:pl-8">
            <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
            <p className="text-lg mb-6">{product.info}</p>
            <p className="font-semibold text-xl mb-6">
              Price: ${product.price}
            </p>

            {/* Message Display */}
            {message && (
              <p
                className={`${
                  message.includes("successfully")
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-4 py-2 rounded-md mb-4`}
              >
                {message}
              </p>
            )}

            <div className="flex justify-start gap-4">
              <Link href="/" passHref>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200 dark:bg-blue-600 dark:hover:bg-blue-500">
                  Back to Shop
                </button>
              </Link>

              <button
                onClick={handleAddToCart}
                className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-200 dark:bg-green-600 dark:hover:bg-green-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
