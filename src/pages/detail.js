import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { products } from '../products';
import { addToCart } from '../stores/cart';

import cartIcon from '../assets/icon-cart-white.svg';
import prevIcon from '../assets/icon-previous.svg';
import nextIcon from '../assets/icon-next.svg';

  const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find(product => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = '/';
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    if (detail) {
      dispatch(addToCart({
        productId: detail.id,
        quantity: quantity
      }));
    }
  };

  const goBack = () => {
    if (detail?.images?.large) {
      setValue(value === 0 ? 0 : value - 1);
    }
  };

  const goForward = () => {
    if (detail?.images?.large) {
      setValue(value === detail.images.large.length - 1 ? detail.images.large.length - 1 : value + 1);
    }
  };

  if (!detail) return <p>Loading...</p>;

  return (
    <main className="flex justify-center pt-15">
      <div className="main-wrapper flex flex-col py-[20px] md:flex-row md:px-[200px] md:py-[100px] relative bg-lightGrayishBlue">
        <div className="image md:basis-1/2 md:flex md:flex-col md:justify-between">
          <div className="large-image">
            <img className="object-cover cursor-pointer rounded-xl w-[400px] h-[400px]" src={detail.images.large[value]} alt={detail.name}/>
            <div className="flex justify-between mt-4">
              <img onClick={goBack} className="bg-white rounded-full p-4 cursor-pointer" src={prevIcon} alt="go-back" />
              <img onClick={goForward} className="bg-white rounded-full p-4 cursor-pointer" src={nextIcon} alt="go-forward" />
            </div>
          </div>
          <div className="small-images flex mt-7 space-x-3 justify-center w-[400px]">
            {detail.images.large.map((img, idx) => (
              <div key={idx} className="single-image">
                <img onClick={() => setValue(idx)} className="w-[80px] h-[80px] object-cover cursor-pointer rounded-xl transition-all hover:opacity-25 hover:border-[3px] border-orange" src={img} alt={`${detail.name} ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="description p-6 md:basis-1/2 md:py-[40px] bg-white rounded-xl shadow-lg">
          <p className="text-azure text-[14px] tracking-widest uppercase font-[700] mb-6">
            FISH & CO
          </p>
          <h1 className="text-3xl md:text-4xl capitalize font-[700] text-darkGrayishBlue">
            {detail.name}
          </h1>
          <p className="hidden md:block text-darkGrayishBlue my-10 leading-7">
            {detail.description}
          </p>
          <p className="md:hidden text-darkGrayishBlue my-6 leading-7">
            {detail.description}
          </p>

          <div className="price flex items-center">
            <span className="text-3xl font-[700] mr-4">₹{detail.price}</span>
            <span className="bg-paleazure text-azure font-[700] py-1 px-2 rounded-lg">
              50%
            </span>
            <p className="md:hidden line-through text-grayishBlue font-[700] translate-x-[100px] mb-2">
              ₹{(detail.price * 2).toFixed(2)}
            </p>
          </div>
          <p className="hidden md:block line-through text-grayishBlue font-[700] mt-2">
            ₹{(detail.price * 2).toFixed(2)}
          </p>

          <div className="buttons-container flex flex-col md:flex-row mt-8">
            <div className="state w-[100%] flex justify-around md:justify-center items-center space-x-10 bg-lightGrayishBlue rounded-lg p-3 md:p-2 md:mr-4 md:w-[150px]">
              <button
                onClick={handleMinusQuantity}
                className="minus text-[24px] md:text-[20px] font-[700] text-azure transition-all hover:opacity-50"
              >
                -
              </button>
              <p className="md:text-[14px] font-bold">{quantity}</p>
              <button
                onClick={handlePlusQuantity}
                className="plus text-[24px] md:text-[20px] font-[700] text-azure transition-all hover:opacity-50"
              >
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="add-btn border-none bg-azure rounded-lg text-white font-[700] px-[70px] py-[18px] mt-4 md:mt-0 md:py-0 md:text-[14px] transition-all btn-shadow hover:opacity-50" >
              <img className="inline-block -translate-x-2 -translate-y-[2px] h-[15px]" src={cartIcon} alt="cart-icon" />
              &nbsp;Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detail;
