import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger icons
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="./images/icon.png" alt="Scribbly Logo" className="w-10 rounded shadow  " />
            <span className="text-xl font-semibold">Scribbly</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/login"><button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Login
            </button></NavLink>
            <NavLink to="/register"><button className="px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-300 transition">
              Register
            </button></NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/login"><button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-8s00 transition">
            Login
          </button></NavLink>
          <NavLink to="/register"><button className="w-full px-4 py-2 border border-black text-black rounded-lg hover:bg-gray-300 transition">
            Register
          </button></NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
