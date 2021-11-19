import React, { useState, useEffect, useContext } from "react";
//import axios from "axios";
import ProductService from "../../services/products";
import { useParams } from "react-router-dom";
import LeftNav from "../common/LeftNav";
import CartContext from "../../contexts/cart";

const filterProductByCategory = (productArray, catID) => {
  const filteredArray = productArray.filter((product) => {
    return product.category === catID;
  });
  return filteredArray;
};

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  //const [cart, setCart] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id: catID } = useParams();

  const { cart, buyHandler, plusHandler, minusHandler } =
    useContext(CartContext);
  //console.log(cartValue);

  useEffect(() => {
    setIsLoading(true);
    ProductService.productList().then((res) => {
      console.log("Results", res.data);
      if (catID) setProduct(filterProductByCategory(res.data, catID));
      else setProduct(res.data);
      setIsLoading(false);
    });
  }, [catID]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // handler
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
  //   if (newCart[productID] === 0) {
  //     delete newCart[productID];
  //   }

  //   setCart(newCart);
  // };

  // jsx

  return (
    <body>
      <main>
        <LeftNav />
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="container">
            {product.map((productItem) => {
              return (
                <section className="card">
                  <h4>{productItem.name}</h4>
                  <img src={productItem.imageURL} alt="Common Hoope !" />
                  <p className="product-description">
                    {productItem.description}
                  </p>
                  <span className="mrp">MRP Rs. {productItem.price}</span>
                  <span className="buy-now">
                    {!cart[productItem.id] ? (
                      <button
                        onClick={() => {
                          buyHandler(productItem);
                        }}
                      >
                        Buy Now
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            plusHandler(productItem.id);
                          }}
                        >
                          +
                        </button>
                        <span className="cart-qty">{cart[productItem.id]}</span>
                        <button
                          onClick={() => {
                            minusHandler(productItem.id);
                          }}
                        >
                          -
                        </button>
                      </>
                    )}
                  </span>
                </section>
              );
            })}
          </div>
        )}
      </main>
      <footer>copyright@2021</footer>
    </body>
  );
};

export default ProductPage;
