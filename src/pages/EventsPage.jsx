import React from 'react'
import "../styles/Style.css";
import EventCard from '../components/EventCard';

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
  }
];

const EventsPage = () => {
  return (
    <>
      <div className="container py-4">

        <h1 className="text-center mb-4">
            Upcoming Events
        </h1>

        <div className="row g-4">
            {events.map((event) => (
            <EventCard key={event.id} event={event} />
            ))}
        </div>

        </div>
    </>
  );
}

export default EventsPage
