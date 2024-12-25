import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Home.css";
import CategoryItem from "../components/CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem/ProductItem";
import Banner from "../components/Banner/Banner";
import { Modal } from "../components/Modal/Modal";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [sales, setSales] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <Link to="/cart">
          <button className="intro-button">Check out</button>
        </Link>
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
              <Link to={`/products/${el.id}`}>
                 <CategoryItem label={el.title} image={el.image} key={el.id} />
              </Link>
            );
          })}
        </div>
      </section>
      <Banner setIsModalOpen={setIsModalOpen} />
      <section className="categories">
        <div div className="categories_title_container">
          <h2 className="categories_title">Sale</h2>
          <Link to="/sales" className="categories_button">
            All sales
          </Link>
        </div>
        <div className="categories_container">
          {sales.map((el) => {
            return <ProductItem data={el} />;
          })}
        </div>
      </section>
      <Footer />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </>
  );
};
