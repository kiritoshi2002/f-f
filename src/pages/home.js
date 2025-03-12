import React, { useState } from "react";
import Header from "../components/header"; // Import Header
import ProductCart from "../components/productCart";
import { products } from "../products"; 

const Home = () => {
  const [query, setQuery] = useState("");

  const getFilteredItems = (query, items) => {
    if (!query) return items;
    return items.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredProducts = getFilteredItems(query, products);

  return (
    <>
      <Header query={query} setQuery={setQuery} /> 
      <div className="p-4 mt-12 bg-[#f4f4f4] px-5">
      
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
