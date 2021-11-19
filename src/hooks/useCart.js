import React, { useEffect, useState } from "react";

export const cartItemsStorage = (cartItems) => {
  localStorage.setItem("cartItemsStorage", JSON.stringify(cartItems));
};

const useCart = () => {
  const [cart, setCart] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cartItemsStorage") !== null) {
      let _cartItems = JSON.parse(localStorage.getItem("cartItemsStorage"));
      setCartItems(_cartItems);

      let _cart = {};
      for (let i = 0; i < _cartItems.length; i++) {
        _cart[_cartItems[i]["id"]] = _cartItems[i]["qty"];
      }
      setCart(_cart);
      // _cartItems.map((item) => {
      //   let _item = {};
      //   _item[id] = id;
      //   return _item;
      // });
    }
  }, []);

  useEffect(() => {
    // localStorage
    cartItemsStorage(cartItems);
  }, [cartItems]);

  const buyHandler = (item) => {
    let productID = item.id;
    let newCart = { ...cart };
    newCart[productID] = 1;
    setCart(newCart);

    //
    let newCartItem = [...cartItems];
    // newCartItem.push(item);
    item.qty = 1;
    setCartItems([...newCartItem, item]);

    //console.log(cartItems);
    // localStorage
    //cartItemsStorage(cartItems);
  };

  const plusHandler = (productID) => {
    let newCart = { ...cart };
    newCart[productID] = newCart[productID] + 1;
    setCart(newCart);
    //
    let itemIndex = cartItems.findIndex((item) => {
      return item.id === productID;
    });
    // console.log("Index is", itemIndex);
    let newCartItem = [...cartItems];
    // newCartItem.push(item);
    let updateItem = { ...newCartItem[itemIndex] };
    updateItem.qty = updateItem.qty + 1;
    newCartItem[itemIndex] = updateItem;
    setCartItems([...newCartItem]);
    console.log(cartItems);
  };

  const minusHandler = (productID) => {
    let newCart = { ...cart };
    newCart[productID] = newCart[productID] - 1;
    if (newCart[productID] === 0) delete newCart[productID];
    setCart(newCart);
    //
    let itemIndex = cartItems.findIndex((item) => {
      return item.id === productID;
    });
    let newCartItem = [...cartItems];
    // newCartItem.push(item);
    let updateItem = { ...newCartItem[itemIndex] };
    updateItem.qty = updateItem.qty - 1;
    if (updateItem.qty === 0) {
      newCartItem.splice(itemIndex, 1);
    } else {
      newCartItem[itemIndex] = updateItem;
    }

    setCartItems([...newCartItem]);
  };

  return [cart, buyHandler, plusHandler, minusHandler, cartItems];
};

export default useCart;
