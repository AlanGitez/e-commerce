import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../commons/CartItem";
import { clearCart } from "../state/cart";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cleanCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h2>ShoppingCart</h2>
      <h3>Productos</h3>
      <article className="box">
        {cart.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={cleanCart}>Limpiar Carrito</button>
      </article>
    </div>
  );
};

export default ShoppingCart;
