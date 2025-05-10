import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

//Shows cart with booked events
const Cart = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart, bookEvents } = useCart();
  const [bookingConfirmed, setBookingConfirmed] = useState(false);


  //books events
  const handleBooking = () => {
    if (cart.length > 0) {
      bookEvents();
      setBookingConfirmed(true);
    }
  };

  //calculates price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

//if no events booked, shows empty cart message
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {bookingConfirmed && <p className="confirmation"> Booking Confirmed!</p>}

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {/* Shows booked events */}
            {cart.map((item) => (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleBooking} className="book-button">
            Book Now {/*Books events*/}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
