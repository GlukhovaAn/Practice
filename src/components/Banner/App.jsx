// Banner.js
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">5% off on the first order</h1>
      <div className="banner__content">
        <div className="banner__icons">
          <img src="watering-can.png" alt="Watering can" />
          <img src="plant.png" alt="Plant" />
          <img src="garden-fork.png" alt="Garden fork" />
          <img src="scissors.png" alt="Scissors" />
          <img src="shovel.png" alt="Shovel" />
        </div>
        <form className="banner__form">
          <input type="text" placeholder="Name" className="banner__input" />
          <input
            type="text"
            placeholder="Phone number"
            className="banner__input"
          />
          <input type="email" placeholder="Email" className="banner__input" />
          <button className="banner__button">Get a discount</button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
