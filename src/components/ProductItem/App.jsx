import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";

const ProductItem = ({ image, name, price, oldPrice, id }) => {
  const dispatch = useDispatch();

  const discount = ((price * 100) / oldPrice - 100).toFixed(1);
  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img
          src={`http://localhost:3333${image}`}
          alt={name}
          className="product-image"
        />
        {price && <div className="product-discount">{discount}%</div>}
      </div>
      <button
        onClick={() => {
          dispatch(addProduct({ id: id, count: 1 }));
        }}
      >
        Add to cart
      </button>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <div className="product-price">
          <span className="product-current-price">
            ${price ? price : oldPrice}
          </span>
          {price && <span className="product-old-price">${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
