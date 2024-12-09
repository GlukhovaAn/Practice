import React from "react";
import "./Header.css";
import Karzina from "../../assets/karzina.svg" 
import Logo from "../../assets/logo.svg" 
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={Logo}
          alt=""
        />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Main Page</li>
          <li className="nav-item">Categories</li>
          <li className="nav-item">All products</li>
          <li className="nav-item">All sales</li>
        </ul>
      </nav>
      <div className="cart">
        <img
          src={Karzina}
          alt="Cart"
        />
        <span className="cart-badge">5</span>
      </div>
    </header>
  );
};

export default Header;
