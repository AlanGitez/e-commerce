import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../state/cart";
import useInput from "../hooks/useInput";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const deleteSingleProduct = () => {
    dispatch(deleteFromCart(product));
  };
  const quantity = useInput();

  return (
    <>
      <li className="list-group-item">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-2">
            <img
              src={product?.image}
              className="card-img-top"
              alt={product.name}
              style={{ width: "5em", height: "5em" }}
            />
          </div>
          <div className="col-6">
            <strong>{product.name}</strong>
          </div>
          <div className="col-1">
            <input
              id={product.id}
              type="number"
              step={product.fraccionable ? 0.1 : 1}
              defaultValue={product.fraccionable ? 0.1 : 1}
              min={product.fraccionable ? 0.1 : 1}
              max={product.stock}
              onChange={quantity.onChange}
            />
          </div>
          <div className="col-3">
            <strong>Subtotal $ {product.price * quantity.value}</strong>
          </div>

          {/* <button className="delete"> del </button> */}
        </div>
      </li>

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
