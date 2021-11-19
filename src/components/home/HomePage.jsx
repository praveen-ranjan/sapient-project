import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import CategoryService from "../../services/categories";
import CategoryItem from "../category/CategoryItem";

const filterEnabledCategory = (categoryArray) => {
  const filteredArray = categoryArray.filter((category) => {
    return category.enabled === true;
  });
  return filteredArray;
};

const HomePage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    CategoryService.categoryList().then((res) => {
      setCategory(filterEnabledCategory(res.data));
    });
  }, []);

  // jsx
  return (
    <body>
      <main>
        <div id="category-container">
          {category.map((categoryItem) => {
            return <CategoryItem categoryItem={categoryItem} />;
          })}
        </div>
      </main>
      <footer>copyright@2021</footer>
    </body>
  );
};

export default HomePage;
