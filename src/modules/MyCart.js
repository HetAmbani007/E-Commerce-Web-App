import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Product from "./Products";

const MyCart = () => {
  const cart = useSelector((state) => state.cart?.MyCart);
  const [cartWithQuantity, setCartWithQuantity] = React.useState([]);

  //code basically check if there is a same quantity available in the cart or not
  React.useEffect(() => {
    const prodctQuantity = {};

    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      // check if item exists
      if (prodctQuantity[product.id]) {
        prodctQuantity[product.id] = {
          item: product,
          count: 1 + prodctQuantity[product.id].count,
        };
      } else {
        // if doesn't exist then add new item
        prodctQuantity[product.id] = { item: product, count: 1 };
      }
    }

    // cart.forEach((element) => {
    //   const product = prodctQuantity[element.id];
    //   prodctQuantity[element.id] = {
    //     item: element,
    //     count: !!product ? product.count + 1 : 1,
    //   };
    // });

    const arr = [];
    Object.keys(prodctQuantity).forEach((key) => {
      arr.push({
        ...prodctQuantity[key].item,
        count: prodctQuantity[key].count,
      });
    });
    setCartWithQuantity(arr);
  }, [cart]);

  console.log(cart.length, "cartData");
  return (
    <>
      <div className="card_container">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartWithQuantity.map((product) => (
            <Product key={product.id} product={product} type="cart" />
          ))
        )}
      </div>
    </>
  );
};
export default MyCart;
