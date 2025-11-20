import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import pic from "../src/assets/picture/01.png.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const title = ["Home", "All Product", "Samsung", "Sony", "LG", "Walton", "Panasonic"];

  const handleClick = (item) => {
    switch (item) {
      case "Home":
        navigate("/");
        break;
      case "All Product":
        navigate("/products");
        break;
      default:
        navigate(`/${item.toLowerCase()}`);
        break;
    }
    setIsOpen(false); // mobile menu close after click
  };

  return (
    <nav className="w-full bg-[#131313]/80 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-[100px] px-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 border-2 border-yellow-500 rounded-full"
            src={pic}
            alt="Logo"
          />
          <p className="text-xl font-semibold">Best Electronic</p>
        </div>

        {/* Desktop / Tablet Menu */}
        <ul className="hidden md:flex justify-end gap-6 text-lg font-bold">
          {title.map((item, index) => {
            let isActive = false;
            if (item === "Home" && location.pathname === "/") isActive = true;
            if (item === "All Product" && location.pathname === "/products") isActive = true;

            return (
              <li
                key={index}
                className={`hover:text-yellow-500 cursor-pointer px-3 py-1 rounded-md ${
                  isActive ? "border-2 border-red-500" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-[#131313]/95 text-white py-4 px-4 gap-3">
          {title.map((item, index) => {
            let isActive = false;
            if (item === "Home" && location.pathname === "/") isActive = true;
            if (item === "All Product" && location.pathname === "/products") isActive = true;

            return (
              <li
                key={index}
                className={`hover:text-yellow-500 cursor-pointer px-3 py-2 rounded-md ${
                  isActive ? "border-2 border-red-500" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
