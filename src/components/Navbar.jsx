import { NavLink } from "react-router-dom";
import "../styles/Style.css";
import React, { useContext } from 'react'
import {ThemeContext} from '../Theme/ThemeContext';

const Navbar = () => {
  const {darkMode, setDarkMode } = useContext(ThemeContext)
  return (
    <>

     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-info" to="/">
          EventHub
        </NavLink>

        <button className="btn btn-warning" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Events
            </NavLink>

            <NavLink className="nav-link" to="/contactUs">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
