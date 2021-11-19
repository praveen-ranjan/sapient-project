import { Link } from "react-router-dom";
const CategoryItem = (props) => {
  const { imageUrl, name, description, id } = props.categoryItem;
  return (
    <div className="category-item">
      <div className="category-image">
        <img src={imageUrl} width="300px" />
      </div>
      <div className="category-name">
        <h1>{name}</h1>
        <p>{description}</p>
        <Link to={`/products/${id}`}>Explore {name}</Link>
      </div>
    </div>
  );
};

export default CategoryItem;
