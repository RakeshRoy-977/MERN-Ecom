import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Home
        </Link>

        <div className="flex space-x-10">
          <Link to="/shop" className="text-white">
            Shop
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/blog" className="text-white">
            Blog
          </Link>
        </div>
        <div className="flex space-x-4">
          <i className="ri-shopping-cart-line text-white cursor-pointer "></i>

          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/signup" className="text-white">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
