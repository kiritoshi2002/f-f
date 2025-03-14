import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleStatusFilter,
  setSortingOrder,
  setMinPrice,
  setMaxPrice,
  setDistributorFilter,
} from "../stores/cart";

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

  const handleClearFilters = () => {
    dispatch(setSortingOrder(""));
    dispatch(setMinPrice(""));
    dispatch(setMaxPrice(""));
    dispatch(setDistributorFilter(""));
  };

  const distributors = ["Deep Sea Foods", "Ocean Fresh", "SeaFood Ltd"];
  const distributorFilter = useSelector(
    (store) => store.cart.distributorFilter
  );

  const handleDistributorChange = (distributor) => {
    dispatch(setDistributorFilter(distributor));
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-white shadow-lg w-80 h-full border-r border-gray-300 transition-transform duration-300 ${
        statusFilter ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ zIndex: 1000 }}
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

      <div className="p-4">
        <label className="block text-gray-700 font-medium">
          Sort by Price:
        </label>
        <select
          className="w-full p-2 border rounded-md"
          value={sortingOrder}
          onChange={handleSortChange}
        >
          <option value="LowToHigh">Low to High</option>
          <option value="HighToLow">High to Low</option>
        </select>
      </div>

      <div className="p-4">
        <label className="block text-gray-700 font-medium mb-2">
          Price Range:
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            className="w-1/2 p-2 border rounded-md"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Min"
          />

          <input
            type="number"
            className="w-1/2 p-2 border rounded-md"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Max"
          />
        </div>
      </div>

      <div className="mt-4 px-4">
        <h2 className="text-xl font-bold text-gray-800">Distributors</h2>
        <div className="ml-4">
          {distributors.map((distributor) => (
            <p
              key={distributor}
              className={`cursor-pointer text-gray-800 hover:text-blue-500 ${
                distributorFilter === distributor
                  ? "font-bold text-blue-500"
                  : ""
              }`}
              onClick={() => handleDistributorChange(distributor)}
            >
              {distributor}
            </p>
          ))}
        </div>
      </div>
      <button
        onClick={handleClearFilters}
        className="w-1/2 p-2 border rounded-md bg-gray-200 hover:bg-gray-300 transition"
      >
        CLEAR FILTERS
      </button>
    </div>
  );
};

export default Filter;
