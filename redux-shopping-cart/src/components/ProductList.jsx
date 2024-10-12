// src/components/ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice'; // Import action

const products = [
  { id: 1, name: 'Product A', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: 150, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product C', price: 200, image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="container mx-auto my-8 p-6">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500">Price: ${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
