import React, { createContext, useState, useContext } from 'react';

//Creates cart
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

//wraps the app, so cart is valid throughout the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

//Booked events stored
  const [bookedEvents, setBookedEvents] = useState([]);

  //books events
const bookEvents = () => {
  setBookedEvents(cart);  
  setCart([]);           
};


//gets events data
  const addToCart = (event) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === event.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === event.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...event, quantity: 1 }];
      }
    });
  };

  //allows user to remove events from the cart
  const removeFromCart = (eventId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== eventId));
  };


//allows user to decreaese quantity of events
  const decreaseQuantity = (eventId) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === eventId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0); // remove if quantity reaches 0
    });
  };

  //allows user to increase quantity of events
  const increaseQuantity = (eventId) => {
    setCart(prevCart => {
      return prevCart.map(item =>
        item.id === eventId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    bookEvents,
    bookedEvents,
  };

  //gives access to the cart
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
