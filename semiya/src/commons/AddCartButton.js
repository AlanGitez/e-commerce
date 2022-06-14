import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/cart';

const AddCartButton = ({product}) => {
  const [disabled, setDisabled] = useState(false);
  const cart = useSelector(state => state.cart);
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
        className={`btn btn-success `}
        onClick={handlerClick}
        disabled={cart.includes(product)}>
        Add to Cart
      </button>
    </>
  );
};

export default AddCartButton;
