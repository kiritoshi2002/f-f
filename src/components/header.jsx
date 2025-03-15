import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu } from "@mui/icons-material";
import MECALON01 from "../assets/MECALON 01.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab, toggleStatusFilter } from "../stores/cart";

const Header = ({ query, setQuery }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(setQuery); // Should log the `setQuery` function
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    let total = carts.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleOpenFilter = () => {
    dispatch(toggleStatusFilter());
  };

  return (
    <div className="relative w-full font-sans">
      <nav className="fixed top-0 left-0 w-full bg-[#add8e6] shadow-md py-2 px-6 flex items-center justify-between z-50 h-12">
        <div className="flex items-center space-x-4">
          <img src={MECALON01} alt="Finding Fish" className="h-8" />
          <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
            MECALON TECH
          </Link>
        </div>

        <div className="hidden xl:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link
            to="/"
            className="font-bold text-xl text-gray-800 no-underline hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-bold text-xl text-gray-800 no-underline hover:text-blue-600 transition"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="font-bold text-xl text-gray-800 no-underline hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </div>

        {/* 🔹 Search Bar Now Comes Before Cart */}
        <div className="flex items-center space-x-4">
          {/* 🔹 Search Bar First */}
          <div className="relative hidden md:flex items-center justify-center">
            <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
            <input
              type="text"
              placeholder="Search products..."
              value={query}
          onChange={(e) => setQuery(e.target.value)}
              className="py-1 pl-10 pr-3 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 w-64"
            />
          </div>

          {/* 🔹 Cart Icon After Search */}
          <div onClick={handleOpenTabCart} className="cursor-pointer relative">
            <ShoppingCart
              className="text-gray-700 hover:text-blue-500 transition duration-200"
              fontSize="large"
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          </div>

          {/* 🔹 Menu Icon for Mobile */}
          <i
            className="bx bx-menu xl:hidden block text-4xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </div>
      </nav>

	    <div className="fixed top-12 left-0 w-full h-12 bg-[#f4f4f4]">
        <div className="pl-4">
          <Menu
            onClick={handleOpenFilter}
            className="text-gray-700 hover:text-blue-500 transition duration-200 cursor-pointer"
            fontSize="large"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-transform duration-300 transform z-50 ${
          isMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <ul className="w-full">
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );

};

export default Header;
