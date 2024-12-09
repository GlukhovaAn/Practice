import React from "react";
import "./ShoppingCardForm.css";

const ShoppingCardForm = () => {
  return (
    <div className="shopping-card">
      <h2 className="shopping-card__title">Order details</h2>
      <p className="shopping-card__items">4 items</p>
      <p className="shopping-card__total">
        Total <span className="shopping-card__price">$541,00</span>
      </p>
      <form className="shopping-card__form">
        <input
          type="text"
          placeholder="Name"
          className="shopping-card__input"
        />
        <input
          type="text"
          placeholder="Phone number"
          className="shopping-card__input"
        />
        <input
          type="email"
          placeholder="Email"
          className="shopping-card__input"
        />
        <button className="shopping-card__button">Order</button>
      </form>
    </div>
  );
};

// mport ShoppingCardForm from "./ShoppingCardForm";

// function App() {
//   return (
//     <div className="App">
//       <ShoppingCardForm />
//     </div>
//   );
// }

// export default App;
export default ShoppingCardForm;
