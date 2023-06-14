import React from "react";
import { Link } from "react-router-dom";
import PizzaBg from "../assets/pizzaBgImg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${PizzaBg})` }}>
      <div className="headerContainer">
        <h1> Papa Sid's Pizzeria</h1>
        <p>
          Indulge in Pizza Perfection: Where Every Bite is a Slice of Heaven!
        </p>
        <Link to="/menu">
          <button>Order Now!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
