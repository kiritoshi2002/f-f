import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false,
    statusFilter: false,
    sortingOrder:"",
    minPrice: "",    
    maxPrice: ""  
};
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
      
      toggleStatusTab(state){
        if(state.statusTab === false){
            state.statusTab = true;
        }else{
            state.statusTab = false;
        }
      },

      toggleStatusFilter(state){
        if(state.statusFilter === false){
          state.statusFilter = true;
      }else{
          state.statusFilter = false;
      }
      },

      setSortingOrder: (state, action) => {
        state.sortingOrder = action.payload;
      },

      setMinPrice(state, action) {
        state.minPrice = action.payload;
    },

    setMaxPrice(state, action) {
        state.maxPrice = action.payload;
    }
     
    }

  });
  
  export const { addToCart, changeQuantity, removeFromCart, clearCart, toggleStatusTab, toggleStatusFilter,setSortingOrder,setMinPrice,
    setMaxPrice } = cartSlice.actions;
  
  export default cartSlice.reducer;