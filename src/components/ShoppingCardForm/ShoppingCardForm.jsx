import React, { useEffect, useState } from "react";
import "./ShoppingCardForm.css";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export const ShoppingCardForm = ({ setIsModalOpen }) => {
  const cartProducts = useSelector((store) => store.cart.cartProducts);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setLength] = useState(0);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    try {
      const res = fetch("http://localhost:3333/order/send", {
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

  useEffect(() => {
    let price = 0;
    cartProducts.forEach((el) => {
      if (el.data.discont_price) {
        price = price + el.data.discont_price * el.count;
      } else {
        price = price + el.data.price * el.count;
      }
    });
    setTotalPrice(price);
    setLength(cartProducts.length);
  }, [cartProducts]);

  return (
    <div className="shopping-card">
      <h2 className="shopping-card__title">Order details</h2>
      <p className="shopping-card__items">{totalCount} items</p>
      <p className="shopping-card__total">
        <span className="shopping-card__items">Total</span>{" "}
        <span className="shopping-card__price">${totalPrice}</span>
      </p>
      <form className="shopping-card__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          className="shopping-card__input"
          {...register("firstName")}
        />
        <input
          type="text"
          placeholder="Phone number"
          className="shopping-card__input"
          {...register("phoneNumber")}
        />
        <input
          type="email"
          placeholder="Email"
          className="shopping-card__input"
          {...register("email")}
        />
        <button className="shopping-card__button">Order</button>
      </form>
    </div>
  );
};

export default ShoppingCardForm;
