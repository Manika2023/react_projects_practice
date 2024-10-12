// src/components/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../features/cart/cartSlice'; // Import actions

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-lg text-gray-600">No items in the cart.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
              <div>
                <span className="font-medium">{item.name}</span> - ${item.price} x {item.quantity} = ${item.totalPrice}
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="ml-4 px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6">
        <p className="font-bold">Total Quantity: <span className="text-gray-700">{totalQuantity}</span></p>
        <p className="font-bold">Total Price: <span className="text-gray-700">${totalPrice}</span></p>
      </div>
      {items.length > 0 && (
        <button
          onClick={handleClearCart}
          className="mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
