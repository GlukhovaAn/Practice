// Banner.js
import React from "react";
import "./Banner.css";
import img from "../../assets/banar.png";
import { useForm } from "react-hook-form";

export const Banner = ({ setIsModalOpen }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    try {
      const res = fetch("http://localhost:3333/sale/send", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res) {
        setIsModalOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="banner">
      <h1 className="banner__title">5% off on the first order</h1>
      <div className="banner__content">
        <img src={img} className="banner__img" />
        <form className="banner__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            className="banner__input"
            {...register("firstName")}
          />
          <input
            type="text"
            placeholder="Phone number"
            className="banner__input"
            {...register("phoneNumber")}
          />
          <input
            type="email"
            placeholder="Email"
            className="banner__input"
            {...register("email")}
          />
          <button className="banner__button">Get a discount</button>
        </form>
      </div>
    </section>
  );
};

export default Banner;
