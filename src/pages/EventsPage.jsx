import React, { useEffect, useMemo, useState } from "react";
import "../styles/Style.css";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import Hero from "../components/Hero";

const EventsPage = () => {
  const [search, setSearch] = useState(" ");
  const [category, setCategory] = useState("");
  const [events, setEvent] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/manali141/eventManagment/main/db.json")
    .then((res) => res.json())
    .then((data) => setEvent(data.events))
    .catch((err) => console.log(err));
  },[])

  const filterEvent = useMemo(() => {
  return events.filter((event) => {
    const term = search.toLowerCase().trim();

    const matchesSearch =
      event.title.toLowerCase().includes(term) ||
      event.location.toLowerCase().includes(term) ||
      event.category.toLowerCase().includes(term);

    const matchesCategory = category === "" || event.category === category;
    return matchesCategory && matchesSearch;
  });
}, [events,search,category])
  return (
    <>
    <Hero/>
      <div className="container py-5">
        <h1 className="mb-4 text-center">Upcoming Events</h1>

        <div className="row mb-4">
          <div className="col-md-8">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
          <div className="col-md-4">
            <FilterBar category={category} setCategory={setCategory} />
          </div>
        </div>
        <div className="row" />
        {filterEvent.length > 0 ? (
          <div className="row g-4 justify-content-center">
            {filterEvent.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <h2>No events Founds</h2>
        )}
      </div>
    </>
  );
};

export default EventsPage;
