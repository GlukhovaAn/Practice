import React, { useState } from "react";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductByAmount } from "../../store/cartSlice";

const ProductDetail = ({ data }) => {
  const cartProducts = useSelector((store) => store.cart.cartProducts);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { price: oldPrice, discont_price: price } = data;
  const discount = ((price * 100) / oldPrice - 100).toFixed(1);

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
      <h2 className="product-title">{data.title}</h2>
      <div className="product-price-section">
        <span className="current-price">${price ? price : oldPrice}</span>
        {price && <span className="original-price">{oldPrice}</span>}
        {price && <span className="discount-badge">{discount}%</span>}
      </div>
      <div className="add-to-cart-container">
        <div className="quantity-section">
          <button
            className="quantity-btn"
            onClick={decrementQuantity}
            disabled={cartProducts.find((el) => el.id === data.id)}
          >
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={incrementQuantity}
            disabled={cartProducts.find((el) => el.id === data.id)}
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            dispatch(
              addProductByAmount({ id: data.id, count: quantity, data: data })
            )
          }
          className="add-to-cart-btn"
          style={
            cartProducts.find((el) => el.id === data.id)
              ? { backgroundColor: "#282828" }
              : {}
          }
          disabled={cartProducts.find((el) => el.id === data.id)}
        >
          Add to cart
        </button>
      </div>

      <div className="product-description">
        <h3>Description</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
