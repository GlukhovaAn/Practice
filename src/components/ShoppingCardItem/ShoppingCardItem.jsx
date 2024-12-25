import React from "react";
import "./ShoppingCardItem.css";
import { useDispatch } from "react-redux";
import { decrement, increment, removeProduct } from "../../store/cartSlice";

export const ShoppingCardItem = ({ data }) => {
  const { image, title, price: oldPrice, discont_price: price } = data.data;
  const { count, id } = data;
  const dispatch = useDispatch();

  return (
    <div className="shopping-card-item">
      <div className="item-image">
        <img src={`http://localhost:3333${image}`} />
      </div>
      <div className="item-details">
        <h3 className="item-name">{title}</h3>
        <div className="item-details-2">
          <div className="quantity-section">
            <button
              className="quantity-btn"
              onClick={() => dispatch(decrement({ id: id }))}
            >
              -
            </button>
            <div className="quantity-value-wrapper">
              <span className="quantity-value">{count}</span>
            </div>
            <button
              className="quantity-btn"
              onClick={() => dispatch(increment({ id: id }))}
            >
              +
            </button>
          </div>
          <div className="item-prices">
            <span className="current-price">${price ? price : oldPrice}</span>
            {price && <span className="original-price">${oldPrice}</span>}
          </div>
        </div>
      </div>
      <button
        className="remove-button"
        onClick={() => dispatch(removeProduct({ id: id }))}
      >
        ×
      </button>
    </div>
  );
};
