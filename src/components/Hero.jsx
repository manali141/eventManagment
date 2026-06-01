import React from 'react'

const Hero = () => {
  return (
<div className="hero-bg text-light py-5 mb-4">
      <div className="container text-center">

        <h1 className="display-4 fw-bold">
          Discover Amazing Events Near You
        </h1>

        <p className="lead mt-3">
          Browse, book, and manage events easily
        </p>

        <button className="btn btn-primary me-2">
          Explore Events
        </button>

        <button className="btn btn-outline-light">
          My Bookings
        </button>

      </div>
    </div>
  )
}

export default Hero
