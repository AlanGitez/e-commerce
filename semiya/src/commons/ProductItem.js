import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AddCartButton from "./AddCartButton";

const ProductItem = ({ product }) => {
  const cart = useSelector(state => state.cart);
  // const [storageCart, setStorageCart] = useLocalStorage("cart", []);
  
  
 

  return (
    <Link to={`/product/${product.id}`}>
      <div class="col">
        <div class="card">
          <img src={product?.image} class="card-img-top" alt={product.name} />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product?.rating}</p>
            <AddCartButton product={product} />

            <p class="card-text">
              {product.stock ? "Hay Stock" : "No contamos con Stock"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;