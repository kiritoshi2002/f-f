import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/cart";

const Filter = () => {
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-white shadow-lg w-80 h-full border-r border-gray-300 transition-transform duration-300 ${
        statusTab ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-black text-lg font-semibold">Filters</h2>
        <button
          onClick={handleCloseTabCart}
          className="text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
      </div>
      {/* Add Filter Content Here */}
    </div>
  );
};

export default Filter;
