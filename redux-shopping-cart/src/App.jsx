// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store'; // Import the store
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <>  {/* Wrap with Provider */}
      <div>
        <h1 className='text-blue-600 text-center mt-4 text-4xl p-1 font-extrabold'>Shopping Cart App</h1>
        <ProductList />
        <Cart /> 
      </div>
    </>
  );
};

export default App;
