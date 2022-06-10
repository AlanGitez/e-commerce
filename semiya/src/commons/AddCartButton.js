import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/cart';
import useLocalStorage from "../hooks/useLocalStorage";

const AddCartButton = ({product}) => {
  const cart = useSelector(state => state.cart)
  const [products, setProducts] = useState([]);
  const [storageCart, setStorageCart] = useLocalStorage("cart", [])  
  const dispatch = useDispatch();


    const handlerClick = (e) => {
        
      e.preventDefault()
      dispatch(addToCart(product))
      // setProducts([...products, product])
      // setStorageCart(products)
      // if(!cart.length){
      //   console.log("entre al if");
      //   dispatch(addToCart(storageCart))
      //   setStorageCart(storageCart)
      // }else{
      //     dispatch(addToCart(product));
      //     console.log("entre al else", cart);
      //     setStorageCart(cart);
      //   }
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
