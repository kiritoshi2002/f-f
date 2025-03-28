import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../stores/cart';

const ProductCart = ({ data }) => {
  const { id, name, price, images, slug, description ,type} = data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  }

  return (
    <div className="bg-[#add8e6] flex items-center justify-center py-10 px-6">
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px]">
        <div className="flex flex-col w-[300px] bg-white rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:bg-gray-300">
  
          <div className="flex justify-center items-center w-full">
            <Link to={slug}>
              <img src={images.large[0]} alt={name} className="h-[300px] w-full object-cover" />
            </Link>
          </div>
          <div className="flex flex-col justify-between w-full p-4 flex-grow">
            <div className="product-text">
              <h1 className="text-2xl font-serif text-[#000080] mb-1">{name}</h1>
              <h2 className="text-xs font-sans font-normal uppercase text-[#000080] tracking-widest mb-2">
                {type}
              </h2>
              <p className="text-sm font-serif text-[#8d8d8d] leading-relaxed mb-2">
                {description}
              </p>
            </div>
  
            <div className="product-price-btn flex justify-between items-center">
              <p className="text-xl font-serif text-[#000080]">
                <span className="text-2xl font-serif">{price}</span>$
              </p>
              <button className="bg-[#008080] text-white px-4 py-2 rounded-full uppercase font-sans text-xs font-medium tracking-widest hover:bg-[#87ceeb] transition-colors" onClick={() => handleAddToCart(id)}>
               Add To Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
  
};

export default ProductCart;
