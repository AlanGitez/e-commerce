import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../state/cart";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const quantity = useInput();

  const handleDelete = (e) => {
    e.preventDefault();
    cart.length == 1 && localStorage.removeItem('cart')
    dispatch(deleteFromCart(product));
  }

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
          <div className="col-1" id={product.id}>
            {/* <input   ESTE ES EL QUE ESTABA ANTES DE QUE META MANO. Alan.-
              type="number"
              step={product.fraccionable ? 0.1 : 1}
              defaultValue={1}
              min={product.fraccionable ? 0.1 : 1}
              max={product.stock}
              onChange={quantity.onChange}
            /> */}

            <input 
              type="number"
              defaultValue={1}
              step={product.fraccionable ? 0.1 : 1}
              min={product.fraccionable ? 0.1 : 1}
              max={product.stock}
              onChange={quantity.onChange}
            />

          </div>
          <div className="col-3">
            <strong>
              Subtotal ${" "}
              {quantity.value
                ? Math.round(product.price * quantity.value * 100) / 100
                : product.price}{" "}
            </strong>
          </div>

          <button className="delete" onClick={handleDelete}> del </button>
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
