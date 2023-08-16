import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { addToCart, removeCart } from "./redux/MyCart/CartSlice";
//create product card component
const Product = ({ product, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) {
    return <p>Loading product...</p>;
  }

  //add selected product from cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  //remove selected product from cart
  const removeItemCart = (product) => {
    console.log("remove from cart");
    dispatch(removeCart(product));
  };

  //check user is logged in or not
  // const authenticationCheck = () => {
  //   alert("Hello");
  // };

  return (
    <Card
      style={{ width: "18rem", justifyContent: "center", alignItems: "center" }}
    >
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: 100, width: 100, marginTop: 10 }}
      />
      <Card.Body style={{ width: "100%" }}>
        <Card.Title style={{ width: "100%", height: 90, textAlign: "center" }}>
          {product.title}
        </Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Card.Text style={{ fontWeight: "bold" }}>
          Price: {product.price}
        </Card.Text>
        <Card.Text style={{ fontWeight: "bold" }}>
          Rating: {product.rating.count}
        </Card.Text>

        {type === "cart" && (
          <Card.Text style={{ fontWeight: "bold" }}>
            Quantity: {product.count}
          </Card.Text>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="primary"
            onClick={() => {
              type === "cart"
                ? removeItemCart(product)
                : handleAddToCart(product);
              navigate("/MyCart");
              console.log("Hello");
            }}
            style={{ flex: 1 }} // Add flex: 1 to the first button
          >
            {type === "cart" ? "Remove" : "Add"} to Cart
          </Button>
          <div style={{ width: "8px" }} />
          {/* Adjust the width to create space between buttons */}
          <Button
            style={{ flex: 1 }}
            onClick={() => {
              navigate("/Payment");
            }}
          >
            CheckOut
          </Button>
          {/* Add flex: 1 to the second button */}
        </div>
      </Card.Body>
    </Card>

    // <div className="card">
    //   <img className="card-image" src={product.image} alt={product.title} />
    //   <div className="card-body">
    //     <h2 className="card-title">{product.title}</h2>
    //     <p className="card-category">Category: {product.category}</p>
    //     {/*  <p className="card-description">Description: {product.description}</p> */}
    //     <p className="card-price">Price: ${product.price}</p>
    //     <p className="card-rating">Rating: {product.rating.rate}</p>
    //     <p className="card-rating-count">
    //       Rating Count: {product.rating.count}
    //     </p>
    //   </div>
    //   <div className="add-to-cart">
    //     {type === "cart" ? (
    //       <button
    //         className="cool-button"
    //         onClick={() => {
    //           removeItemCart(product);
    //         }}
    //       >
    //         Remove item
    //       </button>
    //     ) : (
    //       <Link to="/MyCart">
    //         <button
    //           className="cool-button"
    //           onClick={() => {
    //             // authenticationCheck();
    //             handleAddToCart(product);
    //             // console.log("Product name", product);
    //           }}
    //         >
    //           Add to cart
    //         </button>
    //       </Link>
    //     )}
    //     <button className="cool-button">Add to WishList</button>
    //   </div>
    // </div>
  );
};

export default Product;
