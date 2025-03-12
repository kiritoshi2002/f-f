import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart(state, action) {
        const { productId, quantity } = action.payload;
        const indexProductId = state.items.findIndex((item) => item.productId === productId);
  
        if (indexProductId >= 0) {
          state.items[indexProductId].quantity += quantity;
        } else {
          state.items.push({ productId, quantity });
        }
        localStorage.setItem('carts', JSON.stringify(state.items));
      },
  
      changeQuantity(state, action) {
        const { productId, quantity } = action.payload;
        const indexProductId = state.items.findIndex((item) => item.productId === productId);
  
        if (quantity > 0) {
          state.items[indexProductId].quantity = quantity;
        } else {
          state.items = state.items.filter((item) => item.productId !== productId);
        }
        localStorage.setItem('carts', JSON.stringify(state.items));
      },
  
      removeFromCart(state, action) {
        state.items = state.items.filter((item) => item.productId !== action.payload.productId);
        localStorage.setItem('carts', JSON.stringify(state.items));
      },
  
      clearCart(state) {
        state.items = [];
        localStorage.removeItem('carts');
      },
  
      toggleStatusTab(state) {
        state.statusTab = !state.statusTab;
      },
  
      toggleCart(state) {
        state.statusTab = !state.statusTab; // Use the same logic as toggleStatusTab
      },
  
      toggleFilter(state) {
        // Add logic for toggling the filter if needed
        // For now, reuse the same logic as toggleStatusTab
        state.statusTab = !state.statusTab;
      },
    },
  });
  
  export const {
    addToCart,
    changeQuantity,
    removeFromCart,
    clearCart,
    toggleStatusTab,
    toggleCart,
    toggleFilter,
  } = cartSlice.actions;
  
  export default cartSlice.reducer;