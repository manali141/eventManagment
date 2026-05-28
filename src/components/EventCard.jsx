import "../styles/Style.css";
import { FaHeart } from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <>
      <div className="col-md-4 mb-4">
      <div className="card shadow h-100 border-0">
        <img
          src={event.image}
          className="card-img-top"
          alt={event.title}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{event.title}</h5>

            <FaHeart className="text-danger" />
          </div>

          <p className="card-text mb-1">
            📍 {event.location}
          </p>

          <p className="card-text mb-1">
            📅 {event.date}
          </p>

          <p className="fw-bold text-success">
            ${event.price}
          </p>

          <span className="badge bg-primary">
            {event.category}
          </span>
        </div>
      </div>
    </div>
    </>
  )
}

export default EventCard
