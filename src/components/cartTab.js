import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './cartItem';
import { toggleStatusTab, clearCart } from '../stores/cart';

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const statusTab =useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart= () =>{  
  dispatch(toggleStatusTab());
};
  const handleClearCart = () => {
  dispatch(clearCart());
};

  return (
    <div className={`fixed top-0 right-0 bg-white shadow-2xl w-96 h-full border-l-4 border-blue-500 transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : ""}`} >
  
    <div className="flex justify-between items-center p-5 border-b">
     <h2 className="text-black text-lg font-semibold">Shopping Cart ({carts.length})</h2>
     <button onClick={handleCloseTabCart} className="text-gray-500 hover:text-black text-xl"> &times; </button>
    </div>
    
    <div className="p-1 flex flex-col items-center">
      {carts.length === 0 ? (
      <>
       <p className="text-gray-500 text-sm mb-6">Your cart is empty</p>
       <button className="border border-blue-500 text-blue-500 font-medium px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition" onClick={handleCloseTabCart} >
       Continue Shopping
       </button>
      </>
      ) : (
       <>
        {carts.map((item, key) => <CartItem key={key} data={item} />)}
         <button  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition" onClick={handleClearCart} >
           Clear Cart
            </button>
          </>
        )}
      </div>
  </div>
  
  );
  
  
}

export default CartTab