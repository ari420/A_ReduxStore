"use client"; // Ensure this is a Client Component

import Link from "next/link";
import DarkModeToggle from "../components/DarkModeToggle";
import { useState } from "react"; // Import useState to handle search query

// Define the type for the props here
interface HeaderProps {
  onSearch?: (query: string) => void; // Make onSearch optional
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update the state with the input value
    if (onSearch) {
      onSearch(event.target.value); // Call onSearch if it's passed
    }
  };

  return (
    <header className="w-full p-4 bg-white dark:bg-gray-900 text-black dark:text-white transition-all shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-center space-x-4 md:justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <span className="text-blue-600">Redux</span>Store
        </Link>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm my-2 md:my-0 md:mx-8">
          <input
            type="text"
            value={searchQuery} // Bind the input value to the searchQuery state
            onChange={handleSearch} // Update the state when input changes
            placeholder="Search products..."
            className="w-full p-2 border rounded-md outline-none bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Show the search query */}
        <div className="mt-2 text-sm text-gray-500">
          Searching for: <span className="font-bold">{searchQuery}</span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 xl:mt-0 p-2 ">
          {/* More filters here */}
        </div>

        {/* Cart Button */}
        <Link href="/cart" className=" mt-4 xl:mt-0">
          <button className="p-2 px-8 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
            Cart
          </button>
        </Link>

        {/* Dark/Light Mode Toggle */}
        <div className=" mt-4 xl:mt-0">
          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className=" flex justify-center items-center md:hidden mt-8 ">
        <Link href="/" className=" bg-slate-400 p-2 rounded-xl hover:text-blue-500 mr-2">
          MyStore
        </Link>
        <Link href="/cart" className="bg-slate-400 p-2 rounded-xl hover:text-blue-500 ml-2">
          Cart
        </Link>
      </nav>
    </header>
  );
};

// Default export of the component
export default Header;
