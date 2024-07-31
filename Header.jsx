import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import searchRestaurant from "./searchRestaurant";

function Header() {
  const [searchRestaurant, setRestaurant] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/searchRestaurant/")
      .then((response) => {
        setRestaurant(response.data);
        return;
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, []);
  return (
    <div>
      <header>
        <section className="logo">
          <nav className="nav_bar_container">
            <a href="#" className="link link1">
              Home
            </a>
            <a href="#" className="link link">
              Place Order
            </a>
            <a href="#" className="link link">
              Cart
            </a>
            <a href="#" className="link link">
              Profile
            </a>
          </nav>

          <div className="logo-text">Zomato</div>

          <div className="Search-bar">
            <p className="searchRestro">Search Restaurant</p>
            <input
              className="Search-Pos"
              type="text"
              placeholder="Search Restuarant"
              value={q}
              onChange={(e) => e.target.value}
            />
            <button
              className="Search-button"
              name="searchRestuarant"
              value={(onclick = { searchRestaurant })}
            >
              Search
            </button>
          </div>
          <searchRestaurant />
        </section>
      </header>
    </div>
  );
}
export default Header;

//
