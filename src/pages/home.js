import React, { useState } from "react";
import Header from "../components/header"; // Import Header
import ProductCart from "../components/productCart";
import { products } from "../products"; 
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Home = () => {
  const [query, setQuery] = useState("");

  const getFilteredItems = (query, items) => {
    if (!query) return items;
    return items.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) || 
      product.price.toString().includes(query) 
    );
  };
  

  const filteredProducts = getFilteredItems(query, products);

  return (
    <>
      <Header query={query} setQuery={setQuery} /> 
      <div className="p-4 mt-12 bg-[#f4f4f4] px-5 ">
      
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
        
          {/* <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      </div>
    </>
  );
};

export default Home;
