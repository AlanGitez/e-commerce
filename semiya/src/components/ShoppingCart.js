import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../commons/CartItem";
import { clearCart } from "../state/cart";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { clearVirtualCart } from "../state/virtualCart";

const ShoppingCart = () => {
  const virtualCart = useSelector(state => state.virtualCart);
  const totalAmount = useSelector((state) => state.totalAmount);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cleanCart = () => {
    dispatch(clearCart());
    dispatch(clearVirtualCart());
    localStorage.removeItem("cart");
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
            {virtualCart.map((product, index) => (
              <CartItem
                key={"item-" + product.id + "-" + index}
                product={product}
              />
            ))}
          </ul>
        </div>
        {/* 
        <h3>TOTAL $</h3> */}
        <div className="row d-flex justify-content-end">
          <div className="col-sm d-flex justify-content-end">
            <button
              onClick={cleanCart}
              className="btn btn-warning littleMargin"
            >
              Limpiar Carrito
            </button>
          </div>

          <div className="col-sm-5 d-flex align-items-center justify-content-end">
            <h4>{`TOTAL ${totalAmount}`}</h4>
          </div>

            <button onClick={(e) => {
              e.preventDefault();
              navigate("/shopping-cart/check-out");
            }} disabled={!virtualCart.length} className="btn btn-success">GO CHECKOUT!</button>

        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
