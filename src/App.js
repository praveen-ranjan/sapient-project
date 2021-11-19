import logo from "./logo.svg";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/home/HomePage";
import Products from "./components/products/ProductPage";
import Cart from "./components/cart/CartPage";

import CartContext from "./contexts/cart";
import { useState } from "react";
import useCart from "./hooks/useCart";

function App() {
  // const [cart, setCart] = useState({});

  // const buyHandler = (productID) => {
  //   let newCart = { ...cart };
  //   newCart[productID] = 1;
  //   setCart(newCart);
  // };

  // const plusHandler = (productID) => {
  //   let newCart = { ...cart };
  //   newCart[productID] = newCart[productID] + 1;
  //   setCart(newCart);
  // };

  // const minusHandler = (productID) => {
  //   let newCart = { ...cart };
  //   newCart[productID] = newCart[productID] - 1;
  //   if (newCart[productID] === 0) delete newCart[productID];

  //   setCart(newCart);
  // };
  const [cart, buyHandler, plusHandler, minusHandler, cartItems] = useCart();
  // const _cart = useCart();
  const cartValue = { cart, buyHandler, plusHandler, minusHandler, cartItems };

  return (
    <div className="App">
      <CartContext.Provider value={cartValue}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={Products} />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/cart/" component={Cart} />
      </CartContext.Provider>
    </div>
  );
}

export default App;
