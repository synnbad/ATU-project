import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-logo-container">
          <img src={logo} alt="Logo" className="home-logo" />
        </div>
        <div className="home-title-container">
          <h1 className="home-title">
            Welcome to the Internship Placement System!
          </h1>
        </div>
      

        <div className="home-links">
          <Link to="/login" className="home-link">
            Login
          </Link>
          <Link to="/CreateAccount" className="home-link">
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
