import React from "react";
import "./Footer.css";
import watp from "../../assets/ic-whatsapp.svg";
import inst from "../../assets/ic-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Contacts</h2>
        <div className="footer-row">
          <div className="footer-column">
            <h4 className="footer-heading">Phone</h4>
            <p className="footer-text">+7 (499) 350-66-04</p>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Socials</h4>
            <div className="footer-socials">
              <img src={inst} alt="Cart" /> <img src={watp} alt="Cart" />
            </div>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-column">
            <h4 className="footer-heading">Address</h4>
            <p className="footer-text">
              Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Working Hours</h4>
            <p className="footer-text">24 hours a day</p>
          </div>
        </div>
        <div className="footer-map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48391.58912759809!2d37.558928!3d55.733586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5ab3d889d1%3A0x3f7e6d707ac08002!2sDubininskaya%20Ulitsa%2C%2096%2C%20Moskva%2C%20Russia%2C%20115093!5e0!3m2!1sen!2s!4v1234567890"
            className="footer-iframe"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
