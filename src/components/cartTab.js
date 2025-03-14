import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab, clearCart } from '../stores/cart';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const [showClearModal, setShowClearModal] = useState(false); // State for clear cart modal
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleClearCart = () => {
    setShowClearModal(true); // Show confirmation modal
  };

  const confirmClearCart = () => {
    dispatch(clearCart());
    setShowClearModal(false); // Close modal
  };

  const cancelClearCart = () => {
    setShowClearModal(false); // Close modal
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-white shadow-lg w-96 h-full border-l border-gray-300 transition-transform duration-300 ${
        statusTab ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-black text-lg font-semibold">Shopping Cart ({carts.length})</h2>
        <button onClick={handleCloseTabCart} className="text-gray-500 hover:text-black text-xl">
          &times;
        </button>
      </div>

      <div className="flex flex-col h-full">
        {carts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm mb-6">Your cart is empty</p>
            <button
              className="border border-blue-500 text-blue-500 font-medium px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
              onClick={handleCloseTabCart}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items List with Scroll */}
            <div className="flex-1 overflow-y-auto px-3 pb-56 no-scrollbar">
              {carts.map((item, key) => (
                <CartItem key={key} data={item} />
              ))}
            </div>

            {/* Buttons Fixed at the Bottom */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md p-4">
              <div className="w-full flex gap-4">
                <button
                  className="w-1/2 bg-red-500 text-white px-4 py-3 text-center hover:bg-red-700 transition rounded"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
                <Link
                  to="/checkout"
                  className="w-1/2 text-center bg-blue-500 text-white px-4 py-3 hover:bg-blue-700 transition rounded no-underline"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Clear Cart Confirmation Modal */}
      <Modal show={showClearModal} onHide={cancelClearCart} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Clear Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to clear your cart? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelClearCart}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmClearCart}>
            Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartTab;