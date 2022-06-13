import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../commons/CartItem";
import { clearCart } from "../state/cart";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cleanCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="container-sm">
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
        <h3>TOTAL $</h3> */}
        <div className="row d-flex justify-content-end">
          <div className="col-sm d-flex justify-content-end">
            <button onClick={cleanCart} className='btn btn-warning littleMargin'>Limpiar Carrito</button>
        </div>

        <div className="col-sm-5 d-flex align-items-center justify-content-end">
          <h4>{`TOTAL $2000`}</h4>
        </div>

        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
