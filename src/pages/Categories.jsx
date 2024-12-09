import { useEffect, useState } from "react";
import Footer from "../components/Footer/Appp";
import Header from "../components/Header/App";
import "./Home.css";
import CategoryItem from "../components/CategoryItem/App";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:3333/categories/all");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <Header />
      <section className="categories">
        <div div className="categories_title_container">
          <h2 className="categories_title">Categories</h2>
        </div>
        <div className="categories_container">
          {categories.map((el) => {
            return (
              <CategoryItem label={el.title} image={el.image} key={el.id} />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};
