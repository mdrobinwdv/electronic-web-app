import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import pic from "../src/assets/picture/01.png.png";

function Navbar({ active, setActive }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const title = ["Home", "All Product", "About Me"];

  const handleClick = (item) => {
    if (item === "Home") {
      navigate("/");
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      setActive("Home");
    }
    if (item === "All Product") {
      navigate("/products");
      setActive("All Product");
    }
    if (item === "About Me") {
      navigate("/");
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      setActive("About Me");
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-[#131313]/80 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-[100px] px-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img className="w-16 h-16 border-2 border-yellow-500 rounded-full" src={pic} alt="Logo" />
          <p className="text-xl font-semibold">Best Electronic</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-end gap-6 text-lg font-bold">
          {title.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item)}
              className={`cursor-pointer px-3 py-1 rounded-md 
              ${active === item ? "border-2 border-red-500" : ""}
              hover:text-yellow-500`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#131313]/90 p-4 space-y-3 text-center">
          {title.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item)}
              className={`cursor-pointer py-2 
              ${active === item ? "border-2 border-red-500" : ""}
              hover:text-yellow-500`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
