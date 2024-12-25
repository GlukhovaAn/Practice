import React, { useEffect, useState } from "react";
import "./Header.css";
import Karzina from "../../assets/karzina.svg";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartProducts = useSelector((store) => store.cart.cartProducts);
  const [lenght, setLength] = useState(0);

  useEffect(() => {
    setLength(cartProducts.length);
  }, [cartProducts]);

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <Link to={"/"} className="nav-item">
            Main Page
          </Link>
          <Link to={"/categories"} className="nav-item">
            Categories
          </Link>
          <Link to={"/products"} className="nav-item">
            All products
          </Link>
          <Link to={"/sales"} className="nav-item">
            All sales
          </Link>
        </ul>
      </nav>
      <Link to="/cart">
        <div className="cart">
          <img src={Karzina} alt="Cart" />
          {lenght > 0 && <span className="cart-badge">{lenght}</span>}
        </div>
      </Link>
    </header>
  );
};

export default Header;
