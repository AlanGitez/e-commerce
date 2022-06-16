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
        style={{height:"40px" ,width:"50px"}}
        onClick={handlerClick}
        disabled={cart.includes(product)}>
      <strong>+</strong>
      </button>
    </>
  );
};

export default AddCartButton;
