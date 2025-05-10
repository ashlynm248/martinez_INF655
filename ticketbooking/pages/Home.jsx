import React, { useState } from 'react';
import events from '../data';  
import '../styles/Home.css';
import { Link } from 'react-router-dom';  

//These are the functions that will assist in sorting the events by name, date, and date descending
const Home = () => {
  const [sortedEvents, setSortedEvents] = useState(events);
  const [searchQuery, setSearchQuery] = useState("");


  //This sorts the events by name
  const sortByName = () => {
    const sortedByName = [...events].sort((a, b) => a.title.localeCompare(b.title));
    setSortedEvents(sortedByName);
  };

  //This sorts the events by date in ascending order
  const sortByDate = () => {
    const sortedByDate = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    setSortedEvents(sortedByDate);
  };

  //This sorts the events by date in descending order
  const sortByDateDescending = () => {
    const sortedByDateDesc = [...events].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedEvents(sortedByDateDesc);
  };


  //This is the function that involves the search bar, it allows users to search for events by name, description, and/or location
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  //These are the different filters used
  const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <h1>Upcoming Events</h1>


{/*This is the actual search bar*/}
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />

{/*These are the buttons that allow users to sort the events by name, date, and date descending */}
      <div className="sort-buttons">
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByDate}>Sort by Date (Ascending)</button>
        <button onClick={sortByDateDescending}>Sort by Date (Descending)</button>
      </div>

{/*This is the list of events that will be displayed on the home page */}
      <div className="events-list">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Price:</strong> ${event.price}</p>
            <img src={event.thumbnail} alt={event.title} className="event-thumbnail" />
            <Link to={`/event/${event.id}`}>
              <button className="details-button">Event Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
