import React, { useState, useEffect } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import MECALON01 from '../assets/MECALON 01.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';

const Header = () => {
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
    <nav className="fixed top-0 left-0 w-full bg-[#add8e6] shadow-md py-4 px-6 flex items-center justify-between z-50">
      <div className="flex items-center space-x-2">
        <img src={MECALON01} alt="Finding Fish" className="h-6" />
        <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
          MECALON TECH
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* Checkout Link */}
        <Link
          to="/checkout"
          className="hover:text-blue-500 transition duration-200 text-xl font-bold text-gray-700 no-underline"
        >
          Checkout
        </Link>

        {/* Cart Icon */}
        <div onClick={handleOpenTabCart} className="cursor-pointer relative">
          <ShoppingCart
            className="text-gray-700 hover:text-blue-500 transition duration-200"
            fontSize="large"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {totalQuantity}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;