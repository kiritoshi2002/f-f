import React, { useState, useEffect } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import MECALON01 from '../assets/MECALON 01.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
import searchIcon from '../assets/search.svg';

const Header = ({ query, setQuery }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#add8e6] shadow-md py-2 px-6 flex items-center justify-between z-50">
    
      <div className="flex items-center space-x-4">
        <img src={MECALON01} alt="Finding Fish" className="h-8" />
        <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
          MECALON TECH
        </Link>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      
      <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
        <Link to="/" className="font-bold text-gray-800 no-underline hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/about" className="font-bold text-gray-800 no-underline hover:text-blue-600 transition">
          About Us
        </Link>
        <Link to="/contact" className="font-bold text-gray-800 no-underline hover:text-blue-600 transition">
          Contact
        </Link>
      </div>

      {/* Cart */}
      <div className="flex items-center space-x-4">
        <div onClick={handleOpenTabCart} className="cursor-pointer relative">
          <ShoppingCart className="text-gray-700 hover:text-blue-500 transition duration-200" fontSize="large" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {totalQuantity}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
