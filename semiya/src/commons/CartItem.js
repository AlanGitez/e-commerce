import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../state/cart";

const CartItem = ({ products }) => {
  const dispatch = useDispatch();
  const deleteSingleProduct = () => {
    dispatch(deleteFromCart(products));
  };

  return (
    <div>
      <h4>{products.name}</h4>
      <h5>${products.price}</h5>
      <button onClick={deleteSingleProduct}>Delete</button>
      {/* <button onClick={}>+</button>
      <button onClick={}>-</button> */}
    </div>
  );
};

export default CartItem;
