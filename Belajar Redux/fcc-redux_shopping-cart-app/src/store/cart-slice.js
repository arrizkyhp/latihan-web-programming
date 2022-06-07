import { createSlice } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // to check if item is already available
            const existingItem = state.itemsList.find((item) => item.id === newItem.id)

            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemsList.find(item => item.id === id);

            // if item 1 more, delete item
            if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--;
            } else {
                // if item more than one, decrement
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            message: "Sending Request...",
            type: 'warning'
          }))
          const sendRequest = async () => {
            // Send state as Sending Request
           
            const response = await fetch('https://fcc-redux-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json', {
              method: "PUT",
              body: JSON.stringify(cart)
            })
            const data = await response.json()
      
            // Send state as Request is Successful
            dispatch(uiActions.showNotification({
              open: true,
              message: "Sent Request to Database Successfully",
              type: 'success'
            }))
          }
          try {
              await sendRequest()
          } catch (err) {
            // Send state as error
            dispatch(uiActions.showNotification({
                open: true,
                message: "Sending Request Failed",
                type: 'error'
            }))
          }
          
    }
}

export const cartActions = cartSlice.actions;
export default cartSlice;