import React from "react";
import pizzaParty from "../assets/pizzaparty.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${pizzaParty})` }}
      ></div>
      <div className="aboutBottom">
        <h1 className="aboutTitle">
          Our Story: A Slice of Passion and Tradition at Papa Sid's Pizzeria{" "}
        </h1>
        <p>
          Welcome to Papa Sid's Pizzeria, where our love for pizza runs deep,
          and every slice tells a story. Established in 1923, our family-owned
          pizzeria has been serving the community with passion and dedication
          for generations. Inspired by our beloved patriarch, Papa Sid, we have
          crafted a menu that pays homage to the rich traditions of authentic
          Italian pizza-making while embracing the creativity and desires of our
          diverse clientele.
        </p>
        <p>
          At Papa Sid's, we believe that pizza is more than just a meal; it's an
          experience. From the moment you walk through our doors, the
          tantalizing aroma of freshly baked dough and the cheerful atmosphere
          will make you feel like part of our extended family. Our commitment to
          excellence shines through in every aspect, from using only the finest,
          hand-picked ingredients to crafting our own signature sauces and dough
          recipes, ensuring that each bite delivers a burst of flavors that will
          transport you straight to Italy.
        </p>
        <p>
          We invite you to join us at Papa Sid's Pizzeria and embark on a
          journey of pizza perfection. Whether you choose one of our signature
          creations or create your own masterpiece, we promise that every visit
          will be a delightful celebration of taste, tradition, and the joy of
          good company. Thank you for being part of our story, and we look
          forward to serving you with the utmost passion and care.
        </p>{" "}
      </div>
    </div>
  );
}

export default About;
