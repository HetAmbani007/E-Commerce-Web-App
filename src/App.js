import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import MyCart from "./MyCart";
import SignUp from "./SignUp";
import PaymentMethod from "./paymentMethod";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/MyCart" element={<MyCart />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Payment" element={<PaymentMethod />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
