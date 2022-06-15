import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../commons/CartItem";
import { clearCart } from "../state/cart";
import { Link } from "react-router-dom";
import { totalAmount } from "../state/totalAmount";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const totalAmount1 = useSelector((state) => state.totalAmount);
  // const [totalAmount2, setTotalAmount2] = useState(0);
  const [virtualCart, setVirtualCart] = useState([]);
  const dispatch = useDispatch();

  const cleanCart = () => {
    dispatch(clearCart());
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    if (cart.length !== 0) {
      dispatch(
        totalAmount(
          cart.reduce((suma, item) => {
            return (suma += item.price);
          }, 0)
        )
      );
    } else {
      dispatch(totalAmount(0));
    }
    // dispatch(totalAmount(totalAmount2))

    cart.length &&
      setVirtualCart(cart.filter((item, i) => cart.indexOf(item) === i));
  }, [cart]);

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
            <h4>{`TOTAL ${totalAmount1}`}</h4>
          </div>

          <Link to="/shopping-cart/check-out">
            <button className="btn btn-success">GO CHECKOUT!</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
