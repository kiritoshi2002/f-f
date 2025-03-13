import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusFilter, setSortingOrder, setMinPrice, setMaxPrice } from "../stores/cart";

const Filter = () => {
  const statusFilter = useSelector((store) => store.cart.statusFilter);
  const sortingOrder = useSelector((store) => store.cart.sortingOrder);
  const minPrice = useSelector((store) => store.cart.minPrice);
  const maxPrice = useSelector((store) => store.cart.maxPrice);
  const dispatch = useDispatch();

  const handleCloseFilter = () => {
    dispatch(toggleStatusFilter());
  };

  const handleSortChange = (e) => {
    dispatch(setSortingOrder(e.target.value));
  };

  const handleMinPriceChange = (e) => {
    dispatch(setMinPrice(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    dispatch(setMaxPrice(e.target.value));
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

      {/* Sorting Dropdown */}
      <div className="p-4">
        <label className="block text-gray-700 font-medium">Sort by Price:</label>
        <select
          className="w-full p-2 border rounded-md"
          value={sortingOrder}
          onChange={handleSortChange}
        >
          <option value="LowToHigh">Low to High</option>
          <option value="HighToLow">High to Low</option>
        </select>
      </div>

      {/* Min Price Input */}
      <div className="p-4">
  <label className="block text-gray-700 font-medium mb-2">Price Range:</label>
  <div className="flex gap-2">
    {/* Min Price Input */}
    <input
      type="number"
      className="w-1/2 p-2 border rounded-md"
      value={minPrice}
      onChange={handleMinPriceChange}
      placeholder="Min"
    />
    
    {/* Max Price Input */}
    <input
      type="number"
      className="w-1/2 p-2 border rounded-md"
      value={maxPrice}
      onChange={handleMaxPriceChange}
      placeholder="Max"
    />
  </div>
</div>
      <button className="w-1/2 p-2 border rounded-md">CLEAR FILTERS</button>
      
    </div>
  );
};

export default Filter;
