import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;
function App() {
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      // Send state as Sending Request
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request...",
        type: 'warning'
      }))
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
    
    sendRequest().catch(err => {
      // Send state as error
 
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request Failed",
        type: 'error'
      }))
    });

  }, [cart, dispatch])
  
  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      { !isLoggedIn && <Auth />}
      { isLoggedIn && <Layout /> }
    </div>
  );
}

export default App;
