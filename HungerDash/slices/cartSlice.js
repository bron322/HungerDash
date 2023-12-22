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
      console.log("Item to Remove:", action.payload_id);
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(item => item._id === action.payload._id);
      console.log("Item Index:", itemIndex);
      if (itemIndex >= 0) {
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

export const selectCartItemsById = (state, id)=> state.cart.items.filter(item=> item._id==id);

export const selectCartTotal = state=> state.cart.items.reduce((total, item)=> total = total += item.price, 0)

export default cartSlice.reducer