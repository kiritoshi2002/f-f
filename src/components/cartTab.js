import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './cartItem';
import { toggleStatusTab, clearCart } from '../stores/cart';
import { Link } from 'react-router-dom';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab =useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart= () => {  
  dispatch(toggleStatusTab());
};
  const handleClearCart = () => {
  dispatch(clearCart());
};

return (
  <div className={`fixed top-0 right-0 bg-white shadow-2xl w-96 h-full border-l-4 border-blue-500 transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : "" }`}>
    <div className="flex justify-between items-center p-5 border-b">
      <h2 className="text-black text-lg font-semibold">
        Shopping Cart ({carts.length})
      </h2>
      <button onClick={handleCloseTabCart} className="text-gray-500 hover:text-black text-xl">
        &times;
      </button>
    </div>

    <div className="flex flex-col h-full">
      {carts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm mb-6">Your cart is empty</p>
          <button className="border border-blue-500 text-blue-500 font-medium px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition" onClick={handleCloseTabCart} >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-3">
            {carts.map((item, key) => (
              <CartItem key={key} data={item} />
            ))}
          </div>

          <div className="w-full flex fixed bottom-0 left-0 bg-white border-t border-gray-300 shadow-md">
            <button className="w-1/2 bg-red-500 text-white px-4 py-3 text-center hover:bg-red-700 transition" onClick={handleClearCart} >
              Clear Cart
            </button>
           <Link to="/checkout" className="w-1/2 text-center bg-blue-500 text-white px-4 py-3 hover:bg-blue-700 transition decoration-none" >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  </div>
); 
  
}

export default CartTab