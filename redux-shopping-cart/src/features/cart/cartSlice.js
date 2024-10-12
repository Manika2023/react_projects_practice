import { createSlice } from '@reduxjs/toolkit';

// Get initial cart state from localStorage or set to empty state
const getInitialState = () => {
  const localData = localStorage.getItem('cart');
  const localTotalQuantity = localStorage.getItem('totalQuantity');
  const localTotalPrice = localStorage.getItem('totalPrice');

  return {
    items: localData ? JSON.parse(localData) : [],
    totalQuantity: localTotalQuantity ? Math.max(0, JSON.parse(localTotalQuantity)) : 0,
    totalPrice: localTotalPrice ? Math.max(0, JSON.parse(localTotalPrice)) : 0,
  };
};

const initialState = getInitialState();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
      
      // Persist to localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }

      // Persist to localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
      localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      // Clear localStorage
      localStorage.removeItem('cart');
      localStorage.removeItem('totalQuantity');
      localStorage.removeItem('totalPrice');
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
