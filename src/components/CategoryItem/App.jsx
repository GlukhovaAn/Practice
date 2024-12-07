import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ image, label }) => {
  return (
    <div className="category-item">
      <img src={image} alt={label} className="category-image" />
      <div className="category-label">{label}</div>
    </div>
  );
};

export default CategoryItem;
