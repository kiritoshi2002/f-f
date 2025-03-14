import React, { useState, useEffect } from "react";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../stores/cart";
import deleteIcon from "../assets/trash.svg";
import { Modal, Button } from "react-bootstrap";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState({});
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetails = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetails);
  }, [productId]);

  const handleMinusQuantity = () => {
    if (quantity === 1) {
      setShowRemoveModal(true);
    } else {
      dispatch(changeQuantity({ productId, quantity: quantity - 1 }));
    }
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: quantity + 1 }));
  };

  const handleRemove = () => {
    setShowRemoveModal(true);
  };

  const confirmRemove = () => {
    dispatch(removeFromCart({ productId }));
    setShowRemoveModal(false);
  };

  const cancelRemove = () => {
    setShowRemoveModal(false);
  };

  return (
    <>
      <div className="flex items-center gap-3 py-3 border-b mx-auto max-w-4xl px-4">
        {detail.images && detail.images.large ? (
          <img
            src={detail.images.large[0]}
            alt={detail.name}
            className="w-24 h-24 object-cover"
          />
        ) : (
          <p>Loading image...</p>
        )}

        <div className="flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-[#032b63] whitespace-nowrap w-48">
            {detail.name}
          </h3>

          <div className="flex justify-between items-center w-full mt-1">
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-300 rounded-full w-6 h-6 text-[#032b63] font-bold"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="bg-gray-300 rounded-full w-6 h-6 text-[#032b63] font-bold"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>

            <p className="pt-3 text-lg font-semibold text-[#032b63] min-w-[60px] text-right">
              ₹{detail.price * quantity}
            </p>
            <img
              className="pl-6 pb-1"
              src={deleteIcon}
              onClick={handleRemove}
              alt="remove"
            />
          </div>
        </div>
      </div>

      <Modal show={showRemoveModal} onHide={cancelRemove} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this item from the cart?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelRemove}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartItem;
