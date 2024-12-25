import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Home.css";
import ProductItem from "../components/ProductItem/ProductItem";
import { useLocation, useParams } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const { category } = useParams();
  const location = useLocation();

  useEffect(() => {
    const getProductsAll = async () => {
      try {
        const res = await fetch("http://localhost:3333/products/all");
        const data = await res.json();
        if (location.pathname.includes("products")) {
          setProducts(data);
          return;
        }
        if (location.pathname.includes("sales")) {
          setProducts(data.filter((el) => el.discont_price));
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };
    const getProductsCat = async () => {
      try {
        const res = await fetch(`http://localhost:3333/categories/${category}`);
        const data = await res.json();
        setProducts(data.data);
        setCategoryData(data.category);
      } catch (err) {
        console.log(err);
      }
    };
    if (category) {
      getProductsCat();
      return;
    }
    getProductsAll();
  }, [location]);

  function getTitle() {
    if (location.pathname.includes("products")) {
      if (categoryData) {
        return categoryData.title;
      }
      return "Products All";
    }
    if (location.pathname.includes("sales")) {
      return "All Sales";
    }
  }

  return (
    <>
      <Header />
      <section className="categories">
        <div div className="categories_title_container">
          <h2 className="categories_title">{getTitle()}</h2>
        </div>
        <div className="categories_container">
          {products.map((el) => {
            return <ProductItem data={el} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
