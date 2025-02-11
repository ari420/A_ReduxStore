"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import {
  removeFromCart,
  incrementCount,
  decrementCount,
} from "@/features/counter/counterSlice";
import Image from "next/image";
import Link from "next/link";
import Footer from "../footer/page";
import Header from "../header/page";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // State for handling confirmation prompt
  const [confirmingItemId, setConfirmingItemId] = useState<number | null>(null);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
    setConfirmingItemId(null);
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementCount(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementCount(id));
  };

  const massageCheck = () => {
    alert("your ok to checkout.")
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-black">
        <Header />
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
          Your Cart is Empty
        </h1>
        <Link href="/">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-500">
            Continue Shopping
          </button>
        </Link>
        <Footer />
      </div>
    );
  }

  return (
    <main className="bg-slate-50 dark:bg-black min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Your Cart
        </h1>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-6">
                <Image
                  src={item.imag}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {item.info}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-3">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  ${item.price} x {item.count}
                </p>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                    disabled={item.count <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                  >
                    +
                  </button>
                </div>

                {confirmingItemId === item.id ? (
                  <div className="flex items-center space-x-4">
                    <p className="text-red-600">Remove this item?</p>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition duration-300"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setConfirmingItemId(null)}
                      className="bg-gray-400 text-white py-1 px-3 rounded-md hover:bg-gray-600 transition duration-300"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmingItemId(item.id)}
                    className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-12 flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.count,
              0
            )}
          </p>
          <div>
            <Link href="/">
              <button className="bg-blue-500 mr-2 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-500">
                Back To shop
              </button>
            </Link>
            <Link href="/">
              <button
              onClick={massageCheck}
              className="bg-green-500 text-white py-3 px-8 rounded-md hover:bg-green-700 transition duration-300 dark:bg-green-600 dark:hover:bg-green-500">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
