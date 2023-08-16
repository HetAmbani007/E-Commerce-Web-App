import React from "react";
import { Button, Card } from "react-bootstrap";
import shoppingCart from "../assets/shopping-cart.png";
import "./App.css";
// const About = () => {
//   return (
//     <div className="about-section">
//       <h1>About Page</h1>
//       <Button as="a" variant="primary">
//           Button as link
//         </Button>

//     </div>
//   );
// };

// export default About;

const About = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={shoppingCart} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default About;
