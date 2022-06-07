import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice"

export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const response = await fetch("https://fcc-redux-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json");
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        }catch(err) {
            // Send state as error
            dispatch(uiActions.showNotification({
                open: true,
                message: "Sending Request Failed",
                type: 'error'
            }))
        }
    }
}


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