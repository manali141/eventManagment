import { Link } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function EventCard({ event }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <Link
        to={`/event/${event.id}`}
        className="text-decoration-none text-dark"
      >
        <div className="event-card card border-0 shadow-sm h-100">

          <div className="position-relative">
            <img
              src={event.image}
              className="card-img-top"
              alt={event.title}
            />

            <button className="btn btn-light rounded-circle favorite-btn">
              <FaHeart className="text-danger" />
            </button>
          </div>

          <div className="card-body">

            <h5 className="fw-bold mb-3">
              {event.title}
            </h5>

            <p className="text-muted mb-2">
              <FaMapMarkerAlt className="me-2 text-danger" />
              {event.location}
            </p>

            <p className="text-muted mb-3">
              <FaCalendarAlt className="me-2 text-primary" />
              {event.date}
            </p>

            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-success fw-bold mb-0">
                ${event.price}
              </h4>

              <span className="badge bg-primary px-3 py-2">
                {event.category}
              </span>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;