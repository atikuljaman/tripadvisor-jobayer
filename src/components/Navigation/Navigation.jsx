import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import SignUpPage from "../authentication/SignUpPage/SignUpPage";
import "./Navigation.css";

const Navigation = () => {
  return (
    //   NAVBAR STARTED HERE
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top border-bottom">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img className="navbar-logo img-fluid" src={logo} alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-pencil me-2"></i>
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-regular fa-heart me-2"></i>
                  Trips
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-regular fa-bell me-2"></i>
                  Alerts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  to="/user-dashboard"
                >
                  <i class="fa-solid fa-bars-progress me-2"></i>

                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item sign-in-link">
                <NavLink
                  className="nav-link text-decoration-none"
                  aria-current="page"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  to="/"
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CALLING THE SIGN-IN PAGE MODAL */}
      <SignUpPage />
    </>
    // NAVBAR ENDED HERE
  );
};

export default Navigation;
