import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../state/cart";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handlerClick = (e) => {
    e.preventDefault()
    dispatch(addToCart(product));
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div class="col">
        <div class="card">
          <img src={product?.image} class="card-img-top" alt={product.name} />
          <div class="card-body">
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product?.rating}</p>
            <button
              type="button"
              disable={product.stock ? "false" : "true"}
              class="btn btn-success"
              onClick={handlerClick}
            >
              Add to Cart
            </button>

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