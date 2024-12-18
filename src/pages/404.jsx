import React from "react";
import Footer from "../components/Footer/Appp";
import Header from "../components/Header/App";
import "./Home.css";
import img from "../assets/404.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <Header />
      <section className="not-found">
        <img src={img} alt="Не найдено" className="not-found-img" />
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-text">
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage
        </p>
        <Link to="/" className="not-found-link">
          Go Home
        </Link>
      </section>
      <Footer />
    </>
  );
};
