import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action) => {
             const itemPresent = state.cart.find((item) => item.id === action.payload.id);
             if(itemPresent){
                itemPresent.quantity++;
             }else{
                state.cart.push({...action.payload, quantity:1})
             }
        },

        removeFromCart:(state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
             state.cart = removeItem ;
        },

        IncrementQuantity:(state, action ) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQuantity:(state, action) => {
           const itemPresent = state.cart.find((item) => item.id === action.payload.id);
           if(itemPresent.quantity === 1){
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
             state.cart = removeItem;
           }else{
            //quantityis more than two
            itemPresent.quantity--;
           }
        }

    }
});



export const {addToCart,removeFromCart,IncrementQuantity,decrementQuantity} = cartSlice.actions

export default cartSlice.reducer