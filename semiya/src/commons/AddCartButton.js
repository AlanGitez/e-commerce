import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../state/cart';
import useLocalStorage from "../hooks/useLocalStorage";

const AddCartButton = ({product}) => {
  const cart = useSelector(state => state.cart)
  const [storageCart, setStorageCart] = useLocalStorage("cart", [])  
  const dispatch = useDispatch();


    const handlerClick = (e) => {
        
      e.preventDefault()
        dispatch(addToCart(product));
      };

  return (
        <>
             <button
              type="button"
              disable={product.stock ? "false" : "true"}
              class="btn btn-success"
              onClick={handlerClick}
            >
              Add to Cart
            </button>
        
        </>
  )
}

export default AddCartButton;