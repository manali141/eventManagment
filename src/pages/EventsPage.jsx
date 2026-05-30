import React, { useState } from 'react'
import "../styles/Style.css";
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import FilterBar from "../components/FilterBar";

const events = [
  {
    id: 1,
    title: "React Conference",
    date: "15 June 2026",
    location: "Toronto",
    price: 49,
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865"
  },
  {
    id: 2,
    title: "Music Festival",
    date: "20 June 2026",
    location: "Mississauga",
    price: 25,
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
  },

  {
    id: 3,
    title: "Football Match",
    date: "28 June 2026",
    location: "Brampton",
    price: 75,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974"
  }
];

const EventsPage = () => {
    const[search, setSearch] = useState(" ");
    //const[category, setCategory] = useState("");

    const filterEvent = events.filter((event) => {
      const term = search.trim().toLowerCase();
      if (term === "") return true;
      return (
        event.title.toLowerCase().includes(term) ||
       event.location.toLowerCase().includes(term) ||
       event.category.toLowerCase().includes(term)
      );
    })
  
  return (
    <>
      <div className="container py-4">

        <h1 className="text-center mb-4">
            Upcoming Events
        </h1>

          <SearchBar search={ search } setSearch={setSearch}/>
      {
        filterEvent.length > 0 ? (
          <div className="row g-4 justify-content-center">
          {filterEvent.map((event) => (
              <EventCard key={event.id} event={event} />
          ))}
            </div>
        ) : (
          <h2>No events Founds</h2>
        )
      }

        </div>
    </>
  );
}

export default EventsPage
