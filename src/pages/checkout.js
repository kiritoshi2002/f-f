import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { Link } from 'react-router-dom';
import { products } from '../products';
import { removeFromCart } from '../stores/cart'; // Import the removeFromCart action

const Checkout = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const carts = useSelector(store => store.cart.items) || [];

  const totalPrice = carts.reduce((total, item) => {
    const product = products.find(p => p.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  // Handle remove function with productId as a parameter
  const handleRemove = (productId) => {
    dispatch(removeFromCart({ productId })); // Dispatch the removeFromCart action
  };

  return (
    <div className="mx-auto my-24 max-w-6xl px-4">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {carts.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items Table */}
          <div className="mb-8">
            <div className="grid grid-cols-6 gap-8 bg-gray-200 py-4 px-6 rounded-t-lg">
              <p className="font-semibold">Products</p>
              <p className="font-semibold">Title</p>
              <p className="font-semibold">Price</p>
              <p className="font-semibold">Quantity</p>
              <p className="font-semibold">Total</p>
              <p className="font-semibold">Remove</p>
            </div>
            <hr className="border-t-2 border-gray-300" />

            {carts.map((item) => {
              const product = products.find(p => p.id === item.productId);
              return product ? (
                <div key={item.productId}>
                  <div className="grid grid-cols-6 gap-8 items-center py-4 px-6">
                    <img src={product.images.large[0]} alt={product.name} className="h-16 w-16 object-cover" />
                    <p>{product.name}</p>
                    <p>₹{product.price}</p>
                    <button className="w-16 h-12 border-2 border-gray-200 bg-white text-center">
                      {item.quantity}
                    </button>
                    <p>₹{product.price * item.quantity}</p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(item.productId)} // Pass productId to handleRemove
                    >
                      ✕
                    </button>
                  </div>
                  <hr className="border-t border-gray-200" />
                </div>
              ) : null;
            })}
          </div>

          {/* Cart Totals */}
          <div className="flex justify-between mt-16">
            <div className="flex-1 max-w-md">
              <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₹{totalPrice.toFixed(2)}</p>
                </div>
                <hr className="border-t border-gray-300" />
                <div className="flex justify-between">
                  <p>Shipping Fee</p>
                  <p>Free</p>
                </div>
                <hr className="border-t border-gray-300" />
                <div className="flex justify-between">
                  <h3 className="font-bold">Total</h3>
                  <h3 className="font-bold">₹{totalPrice.toFixed(2)}</h3>
                </div>
              </div>
              <button className="w-full bg-red-500 text-white py-3 mt-6 rounded-lg hover:bg-red-600 transition-colors">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>

          {/* Back to Cart and Proceed to Payment Buttons */}
          <div className="flex justify-between mt-8">
            <Link
              to="/cart"
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Back to Cart
            </Link>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;