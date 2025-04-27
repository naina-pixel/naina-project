import { useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Assuming you are using Lucide Icons for dark mode

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        <img src="path_to_your_kaash_logo.png" alt="Kaash Dev Logo" className="h-10" />
      </div>

      {/* Navbar Links */}
      <div className="hidden md:flex space-x-6 ml-auto">
  <a href="#dashboard" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Dashboard</a>
  <a href="#about" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">About</a>
  <a href="#services" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Services</a>
  <a href="#contact" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Contact</a>
</div>
      {/* Dark Mode Toggle */}
      <div className="flex items-center ml-4">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="bg-transparent text-gray-600 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-full transition"
  >
    {darkMode ? (
      <Sun className="w-6 h-6 text-yellow-400" />  // Sun icon for light mode
    ) : (
      <Moon className="w-6 h-6 text-gray-600" />  // Moon icon for dark mode
    )}
  </button>
</div>
    </nav>
  );
};

export default Navbar;
