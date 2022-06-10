import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../state/cart";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const deleteSingleProduct = () => {
    dispatch(deleteFromCart(product));
  };

  return (
      <>
        <div class="row product">
            <div class="col-sm-2">
                <img src={product.img} alt="product img" />
            </div>
            <div class="col-sm-3">
                <h2>{product.name}</h2>
            </div>

            <div class="col-sm-1">
                <button class="delete"> del </button>
            </div>

            <div class="col-sm-3 d-flex justify-content-center align-items-center ">
                <button>-</button>
                <p>cuantos tengo</p>
                <button>+</button>
            </div>

            <div class="col">
                <h2>{product.price}</h2>
            </div>
            <hr />
        </div>
      
      </>



    // <div>
    //   <h4>{products.name}</h4>
    //   <h5>${products.price}</h5>
    //   <button onClick={deleteSingleProduct}>Delete</button>
    //   {/* <button onClick={}>+</button>
    //   <button onClick={}>-</button> */}
    // </div>
  );
};

export default CartItem;
