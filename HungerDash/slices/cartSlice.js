import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      console.log("Current Cart Items:", state.items);
      console.log("Item to Remove:", action.payload);
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(item => item.name === action.payload.name);
      console.log("Item Index:", itemIndex);
      if (itemIndex >= -1) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("Can't remove item as it is not in the cart");
      }
      state.items = newCart;
    },       
    emptyCart: (state, action)=>{
        state.items = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export const selectCartItems = state=> state.cart.items;

export const selectCartItemsById = (state, name)=> state.cart.items.filter(item=> item.name==name);

export const selectCartTotal = state=> state.cart.items.reduce((total, item)=> total = total += item.price, 0)

export default cartSlice.reducer