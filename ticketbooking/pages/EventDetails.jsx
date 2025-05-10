import React from 'react';
import { useParams } from 'react-router-dom';
import events from '../data'; 
import '../styles/EventDetails.css'; 
import { useCart } from '../context/CartContext'; // Import the useCart hook

//This shows the details of the event
const EventDetails = () => {
  const { id } = useParams();  //Params gets the id from the URL
  const event = events.find(event => event.id === parseInt(id));  //this allows the event to be found by the id
  const { addToCart } = useCart(); // Get the addToCart function from the context

  // If the event is not found, display an error
  if (!event) {
    return <div>Event not found</div>;
}

//this displays the events and all the details of the event
  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <img src={event.thumbnail} alt={event.title} className="event-image" />
      <br></br>
      <img src={event.image} alt={event.title} className="event-image" />
      <p>{event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Price:</strong> ${event.price}</p>

      
      {/* Add to Cart button */}
      <button className="cart-button" onClick={() => addToCart(event)}>Add to Cart</button>
    </div>
  );
};

export default EventDetails;


