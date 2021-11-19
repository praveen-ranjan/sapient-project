import React, { useState, useEffect } from "react";
import CategoryService from "../../services/categories";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    CategoryService.categoryList().then((res) => {
      setCategory(res.data);
    });
  }, []);

  return (
    <nav>
      {category.map((item) => {
        return (
          <div>
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
    </nav>
  );
};

export default LeftNav;
