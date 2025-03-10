import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, 
  statusTab: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      if (state.items[productId]) {
        state.items[productId] += quantity;
      } else {
        state.items[productId] = quantity;
      }
    },
    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      if (quantity <= 0) {
        delete state.items[productId];
      } else {
        state.items[productId] = quantity;
      }
    },
    toggleStatusTab: (state) => {
      state.statusTab = !state.statusTab;
    }
  }
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
