import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ image, label }) => {
  return (
    <div className="category-item">
      <div className="category-image-container">
        <img
          src={`http://localhost:3333${image}`}
          alt={label}
          className="category-image"
        />
      </div>
      <div className="category-label">{label}</div>
    </div>
  );
};

export default CategoryItem;
