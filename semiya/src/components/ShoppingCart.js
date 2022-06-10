import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../commons/CartItem";
import ProductItem from "../commons/CartItem";
import { clearCart } from "../state/cart";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  

  const dispatch = useDispatch();
  const cleanCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div class="container-sm">
        {/* FILA DEL TITUTLO */}
        <div class="row">
          <h4>SHOPPING CART</h4>
          <hr />
        </div>

        {/* FILA DE PRODUCTOS DE CARRITO */}
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        <h3>Carrito</h3>
        <button onClick={cleanCart}>Limpiar Carrito</button>
      </div>
    </>
  );
};

export default ShoppingCart;
