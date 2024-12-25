import React from "react";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  const { image, title, price: oldPrice, discont_price: price, id } = data;
  const cartProducts = useSelector((store) => store.cart.cartProducts);
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
        <button
          onClick={(e) => {
            dispatch(addProduct({ id: id, count: 1, data: data }));
          }}
          className="product-buy-btn"
          style={
            cartProducts.find((el) => el.id === id)
              ? { backgroundColor: "#282828" }
              : {}
          }
          disabled={cartProducts.find((el) => el.id === id)}
        >
          Add to cart
        </button>
      </div>
      <Link to={`/product/${id}`}>
        <div className="product-details">
          <p className="product-name">{title}</p>
          <div className="product-price">
            <span className="product-current-price">
              ${price ? price : oldPrice}
            </span>
            {price && <span className="product-old-price">${oldPrice}</span>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
