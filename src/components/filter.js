import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusFilter } from "../stores/cart";

const Filter = () => {
  const statusFilter = useSelector((store) => store.cart.statusFilter);

  const dispatch = useDispatch();

  const handleCloseFilter = () => {
    dispatch(toggleStatusFilter());
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-white shadow-lg w-80 h-full border-r border-gray-300 transition-transform duration-300 ${
        statusFilter ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-black text-lg font-semibold">Filters</h2>
        <button
          onClick={handleCloseFilter}
          className="text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
      </div>
      {/*  Filter Content  */}
    </div>
  );
};

export default Filter;
