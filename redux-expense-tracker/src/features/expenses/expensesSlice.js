// src/features/expenses/expensesSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Function to get initial state from local storage or use a default
const getInitialState = () => {
  const localData = localStorage.getItem('expenses');
  return localData ? JSON.parse(localData) : { transactions: [], totalBalance: 0 };
};

// Get initial state
const initialState = getInitialState();

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.totalBalance += action.payload.amount;
      saveToLocalStorage(state); // Save to local storage
    },
    editTransaction: (state, action) => {
      const index = state.transactions.findIndex(tx => tx.id === action.payload.id);
      if (index !== -1) {
        state.totalBalance -= state.transactions[index].amount; // Deduct old amount
        state.transactions[index] = action.payload; // Update transaction
        state.totalBalance += action.payload.amount; // Add new amount
        saveToLocalStorage(state); // Save to local storage
      }
    },
    deleteTransaction: (state, action) => {
      const transaction = state.transactions.find(tx => tx.id === action.payload.id);
      if (transaction) {
        state.totalBalance -= transaction.amount; // Adjust balance
        state.transactions = state.transactions.filter(tx => tx.id !== action.payload.id);
        saveToLocalStorage(state); // Save to local storage
      }
    },
  },
});

// Helper function to save state to local storage
const saveToLocalStorage = (state) => {
  localStorage.setItem('expenses', JSON.stringify(state));
};

export const { addTransaction, editTransaction, deleteTransaction } = expensesSlice.actions;

export default expensesSlice.reducer;
