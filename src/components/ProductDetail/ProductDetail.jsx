import React, { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-detail">
      <h1 className="product-title">Secateurs</h1>
      <div className="product-price-section">
        <span className="current-price">$199</span>
        <span className="original-price">$240</span>
        <span className="discount-badge">-17%</span>
      </div>
      <div className="quantity-section">
        <button className="quantity-btn" onClick={decrementQuantity}>
          -
        </button>
        <span className="quantity-value">{quantity}</span>
        <button className="quantity-btn" onClick={incrementQuantity}>
          +
        </button>
      </div>
      <button className="add-to-cart-btn">Add to cart</button>
      <div className="product-description">
        <h2>Description</h2>
        <p>
          This high quality everyday secateur features a fully hardened and
          tempered, high-carbon steel blade for lasting sharpness. For comfort,
          the robust but lightweight alloy handles are covered in a soft grip,
          in a bright terracotta colour for maximum visibility in the garden.
          It won’t be easy to leave this pruner behind at the end of the day!
          Rubber cushion stops prevent jarring over repeated use, reducing hand
          strain for the user.
        </p>
        <p>
          This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement,
          possibly the highest accolade in gardening, for peace of mind this
          pruner comes with a ten-year guarantee against manufacturing defects.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
