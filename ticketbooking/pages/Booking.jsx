import React from 'react';
import { useCart } from '../context/CartContext';

//display booked events
const Bookings = () => {
  const { bookedEvents } = useCart();


  // If no booked events, display a message
  return (
    <div className="bookings">
      <h2>Your Booked Events</h2>
      {bookedEvents.length === 0 ? (
        <p>You haven't booked any events yet.</p>
      ) : (
        <ul>
            {/* Goes through booked events and displays them */}
          {bookedEvents.map((event, index) => (
            <li key={`${event.id}-${index}`}>
              <h4>{event.title}</h4>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Quantity: {event.quantity}</p>
              <p>Total: ${(event.price * event.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookings;
