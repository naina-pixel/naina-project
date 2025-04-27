import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react'; // Added Menu and X icons

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 relative z-50">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          <img src="path_to_your_kaash_logo.png" alt="Kaash Dev Logo" className="h-10" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 ml-auto mr-6">
          <a href="#dashboard" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Dashboard</a>
          <a href="#about" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">About</a>
          <a href="#services" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Services</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Contact</a>
        </div>

        {/* Right side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-transparent text-gray-600 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-full transition order-1 md:order-2"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-gray-600" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden order-2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links with Animation */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
          menuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#dashboard" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Dashboard</a>
          <a href="#about" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">About</a>
          <a href="#services" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Services</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-200 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
