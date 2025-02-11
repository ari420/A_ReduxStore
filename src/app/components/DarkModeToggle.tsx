// DarkModeToggle.tsx
import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // Check localStorage for saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark"); // Add 'dark' class to root
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark"); // Remove 'dark' class from root
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
