import React from "react";
import "./ProductItem.css";

const ProductItem = ({ image, name, price, oldPrice }) => {
    const discount = price * 100 / oldPrice -100 
  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img src={`http://localhost:3333${image}`} alt={name} className="product-image" />
        {oldPrice && <div className="product-discount">-{discount}%</div>}
      </div>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <div className="product-price">
          <span className="product-current-price">${price}</span>
          {oldPrice && <span className="product-old-price">${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};


export default ProductItem;
