import React from "react";
import "./ShoppingCardItem.css";

const ShoppingCardItem = ({ image, name, price, originalPrice, quantity, onRemove, onQuantityChange }) => {
  return (
    <div className="shopping-card-item">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <div className="item-quantity">
          <button onClick={() => onQuantityChange(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
        </div>
      </div>
      <div className="item-prices">
        <span className="current-price">${price}</span>
        {originalPrice && <span className="original-price">${originalPrice}</span>}
      </div>
      <button className="remove-button" onClick={onRemove}>×</button>
    </div>
  );
};

// export default ShoppingCardItem;

// import React, { useState } from "react";
// import ShoppingCardItem from "./ShoppingCardItem";

// const App = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleRemove = () => {
//     console.log("Item removed");
//   };

//   const handleQuantityChange = (newQuantity) => {
//     if (newQuantity >= 1) {
//       setQuantity(newQuantity);
//     }
//   };

//   return (
//     <div>
//       <ShoppingCardItem
//         image="path/to/image.jpg"
//         name="Secateurs"
//         price={155}
//         originalPrice={240}
//         quantity={quantity}
//         onRemove={handleRemove}
//         onQuantityChange={handleQuantityChange}
//       />
//     </div>
//   );
// };

// export default App;
// 