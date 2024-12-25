import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Home.css";
import { useLocation } from "react-router-dom";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { useSelector } from "react-redux";

export const Product = () => {
  const location = useLocation();
  const [data, setData] = useState();
  const cartProducts = useSelector((store) => store.cart.cartProducts);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:3333/products/${location.pathname.split("/")[2]}`
        );
        const data = await res.json();
        setData(data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [location]);

  return (
    <>
      <Header />
      <section className="product-container">
        {data && (
          <>
            <div className="product-img">
              <img src={`http://localhost:3333${data.image}`} />
            </div>
            <ProductDetail data={data} />
          </>
        )}
      </section>
      <Footer />
    </>
  );
};
