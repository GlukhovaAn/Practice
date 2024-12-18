import { useEffect, useState } from "react";
import Footer from "../components/Footer/Appp";
import Header from "../components/Header/App";
import "./Home.css";
import CategoryItem from "../components/CategoryItem/App";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem/app";
import Banner from "../components/Banner/App";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:3333/categories/all");
        const data = await res.json();
        setCategories(data.slice(0, 4));
      } catch (err) {
        console.log(err);
      }
    };
    const getsales = async () => {
      try {
        const res = await fetch("http://localhost:3333/products/all");
        const data = await res.json();
        setSales(data.filter((el) => el.discont_price).slice(0, 4));
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
    getsales();
  }, []);

  return (
    <>
      <Header />
      <section className="intro">
        <h1 className="intro-titl">Amazing Discounts on Garden Products!</h1>
        <button className="intro-button">Check out</button>
      </section>
      <section className="categories">
        <div div className="categories_title_container">
          <h2 className="categories_title">Categories</h2>
          <Link to="/categories" className="categories_button">
            All categories
          </Link>
        </div>
        <div className="categories_container">
          {categories.map((el) => {
            return (
              <CategoryItem label={el.title} image={el.image} key={el.id} />
            );
          })}
        </div>
      </section>
      <Banner />
      <section className="categories">
        <div div className="categories_title_container">
          <h2 className="categories_title">Sale</h2>
          <Link to="/sales" className="categories_button">
            All sales
          </Link>
        </div>
        <div className="categories_container">
          {sales.map((el) => {
            return (
              <ProductItem
                name={el.title}
                image={el.image}
                key={el.id}
                price={el.discont_price}
                oldPrice={el.price}
                id={el.id}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
