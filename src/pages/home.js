import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header";
import ProductCart from "../components/productCart";
import { products } from "../products";
import { QueryContext } from "../components/layout"; 

const Home = () => {
  const { query } = useContext(QueryContext); // ✅ Get query from context
  const sortingOrder = useSelector((store) => store.cart.sortingOrder);
  const minPrice = useSelector((store) => store.cart.minPrice);
  const maxPrice = useSelector((store) => store.cart.maxPrice);
  const distributorFilter = useSelector(
    (store) => store.cart.distributorFilter
  );

  const getFilteredItems = (query, items) => {
    if (!query) return items;
    return items.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.price.toString().includes(query)
    );
  };

  let filteredProducts = getFilteredItems(query, products);

  if (sortingOrder === "LowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortingOrder === "HighToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else {
    filteredProducts = [...filteredProducts].sort((a, b) => a.id - b.id);
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= parseFloat(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseFloat(maxPrice)
    );
  }

  if (distributorFilter) {
    filteredProducts = filteredProducts.filter(
      (product) => product.distributor === distributorFilter
    );
  }

  return (
    <>
      <Header /> {/* ✅ No need to pass query/setQuery */}
      <div className="p-4 mt-12 bg-[#f4f4f4] px-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 no-scrollbar">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, key) => (
              <div key={key} className="flex justify-center">
                <ProductCart data={product} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
