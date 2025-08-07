import React from "react";
import "./Header.css";
import backgroundImage from "../../assets/home_img.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate('/menu');
  };

  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="header-contents">
        <h1>Satisfy Your Cravings Instantly with CraveNow</h1>
        <p>
          Discover a world of delicious flavors delivered right to your doorstep.
          From sizzling burgers to fresh salads, we bring restaurant-quality meals
          to your table in minutes. Order now and experience the ultimate food delivery service!
        </p>
        <div className="header-buttons">
          <button className="primary-btn" onClick={handleExploreMenu}>Explore Menu</button>
          <button className="secondary-btn">Download App</button>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Restaurants</span>
          </div>
          <div className="stat">
            <span className="stat-number">30min</span>
            <span className="stat-label">Avg Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
