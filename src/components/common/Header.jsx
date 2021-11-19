import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/cart";
const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <div className="menu">
        <div>
          <Link to="/">
            <img src="http://localhost:3000/logo.png" />
          </Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
        </div>
        <div>Signin</div>
        <div>Register</div>
        <div>
          <Link to="/cart">{Object.keys(cart).length} Items</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
