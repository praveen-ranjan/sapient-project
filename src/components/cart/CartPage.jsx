import React, { useContext } from "react";
import CartContext from "../../contexts/cart";

const CartPage = () => {
  const { cart, buyHandler, plusHandler, minusHandler, cartItems } =
    useContext(CartContext);

  // console.log(cartItems);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="container-cart">
          <h2>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="cart-item">
                <img className="cart-image" src={item.imageURL}></img>
                <div>
                  <span className="cart-item-name">{item.name}</span>
                  <br />
                  <br />
                  <div className="cart-item-desc">
                    <span>
                      <button
                        className="cart-button"
                        onClick={() => {
                          minusHandler(item.id);
                        }}
                      >
                        -
                      </button>
                    </span>
                    <span>&nbsp;{item.qty}&nbsp;</span>
                    <span>
                      <button
                        className="cart-button"
                        onClick={() => {
                          plusHandler(item.id);
                        }}
                      >
                        +
                      </button>
                    </span>
                    <span>&nbsp;X&nbsp;</span>
                    <span>&nbsp;Rs.&nbsp;{item.price}</span>
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rs.&nbsp;
                      {item.price * item.qty}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="checkout-button"> Proceed to Checkout</button>
        </div>
      ) : (
        "No item in cart!"
      )}
    </>
  );
};

export default CartPage;
