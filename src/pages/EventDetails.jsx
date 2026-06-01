import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const events = [
  {
    id: 1,
    title: "React Conference",
    date: "15 June 2026",
    location: "Toronto",
    price: 49,
    category: "Technology",
    image:
      "https://business.fiu.edu/biz/react/assets/img/react-banner-with-slogan.jpg",
    description: "Learn React from experts in this amazing conference."
  },
  {
    id: 2,
    title: "Music Festival",
    date: "20 June 2026",
    location: "Mississauga",
    price: 25,
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    description: "Enjoy live music with top artists."
  }
];

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = events.find(
      (e) => e.id === parseInt(id)
    );

    setEvent(foundEvent);
  }, [id]);

  if (!event) {
    return (
      <div className="container py-5">
        <h3>Event not found</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row">

        <div className="col-md-6">
          <img
            src={event.image}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">

          <h2>{event.title}</h2>

          <p>{event.description}</p>

          <p>📍 {event.location}</p>

          <p>📅 {event.date}</p>

          <p className="fw-bold text-success">
            ${event.price}
          </p>

          <span className="badge bg-primary mb-3">
            {event.category}
          </span>

          <br />

          <button className="btn btn-primary mt-3">
            Book Tickets
          </button>

        </div>

      </div>
    </div>
  );
}

export default EventDetails;