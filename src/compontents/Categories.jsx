import React from "react";
import "../CSS/Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {

  return (
    <div className="categories">
      <Link to="/products/0" className="categories_container">
        <div className="category"><img src="../images/women_banner.png" alt="" /></div>
      </Link>

      <Link to="/products/1" className="categories_container">
        <div className="category"><img src="../images/men_banner.png" alt="" /></div>
      </Link>

    </div>
  );
};

export default Categories;
