import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../commons/CartItem";
import ProductItem from "../commons/CartItem";
import { clearCart } from "../state/cart";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart)

  const dispatch = useDispatch();
  const cleanCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div>
        {/* FILA DEL TITUTLO */}
        <div className="row littleMargingit ">
          <h4>SHOPPING CART</h4>
          <hr />
        </div>

        {/* FILA DE PRODUCTOS DE CARRITO */}
        <div className="card">
          <ul className="list-group list-group-flush">
            {" "}
            {/* style={{justifyContent:"start"}} */}
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
{/* 
        <h3>Total $</h3> */}
        <button onClick={cleanCart} className='btn btn-warning littleMargin'>Limpiar Carrito</button>
      </div>
    </>
  );
};

export default ShoppingCart;
