import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cart";

const AddCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <>
      <button
        type="button"
        disable={product.stock ? "false" : "true"}
        className="btn btn-success"
        onClick={handlerClick}
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddCartButton;
