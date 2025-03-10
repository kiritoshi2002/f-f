import React, { useState } from "react";
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
    <div className="p-4 mt-20">



      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
        />
      </div>

      
      <div className="container mx-auto px-4">
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
    </div>
  );
};

export default Home;