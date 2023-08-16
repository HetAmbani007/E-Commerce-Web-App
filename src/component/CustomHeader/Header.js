import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shoppingImage from "../../assets/shopping-cart.png";
const Header = () => {
  const cart = useSelector((state) => state.cart?.MyCart);

  const totalItem = cart.length;

  return (
    <nav className="navbar">
      <img
        src="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg"
        alt="Image Description"
        class="my-image"
        id="main-image"
      ></img>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/MyCart">
            {totalItem === 0 ? (
              <div></div>
            ) : (
              <div className="total-item">{totalItem}</div>
            )}
            <img
              src={shoppingImage}
              alt="Hello"
              height="25px"
              style={{ filter: "invert(100%)", zIndex: 2 }}
            />
          </Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
