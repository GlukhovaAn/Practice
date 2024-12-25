import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Home.css";
import { useSelector } from "react-redux";
import { ShoppingCardItem } from "../components/ShoppingCardItem/ShoppingCardItem";
import { Link } from "react-router-dom";
import ShoppingCardForm from "../components/ShoppingCardForm/ShoppingCardForm";
import { Modal } from "../components/Modal/Modal";

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const cartProducts = useSelector((store) => store.cart.cartProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProducts(cartProducts);
  }, [cartProducts]);

  return (
    <>
      <Header />
      <section className="cart">
        {products.length === 0 ? (
          <div className="cart-flex-column">
            <div className="cart-title-container">
              <h2 className="cart-title">Shopping cart</h2>
              <Link to="/products">
                <button className="cart-title-btn">Back to the store</button>
              </Link>
            </div>
            <p className="cart-desc">
              Looks like you have no items in your basket currently.
            </p>
            <Link to="/products">
              <button className="cart-btn">Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <div className="cart-items-wrapper">
            <div className="cart-items">
              {products.map((el) => {
                return <ShoppingCardItem data={el} />;
              })}
            </div>
            <ShoppingCardForm setIsModalOpen={setIsModalOpen} />
          </div>
        )}
      </section>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
      <Footer />
    </>
  );
};
