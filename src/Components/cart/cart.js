import React from "react";
import Img from "../cart.jpg";
import "./cart.css";

export const cart = () => {
  return (
    <div className="cart">
      <img src={Img} alt="carrito"></img>
      <h2>1</h2>
    </div>
  );
};

export default cart;
