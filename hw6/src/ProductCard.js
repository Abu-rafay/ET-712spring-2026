import React from "react";
import "./App.css";

const ProductCard = function(props) {
  return (
    <div className="productCard">
      <img src={props.image} className="productImage" alt={props.name} />

      <div className="productInfo">
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>

        <p className={props.available ? "inStock" : "outStock"}>
          {props.available ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;