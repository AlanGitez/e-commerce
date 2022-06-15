import React from "react";
import { Link, useNavigate } from "react-router-dom";
import semilla from "../iconos/logoSemiYa.svg";
import { logoutRequest, setUser } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import carrito from "../iconos/icon_shopping_cart.svg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const user = useSelector((state) => state.user);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutRequest())
      .then(() => dispatch(setUser()))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <nav>
      <div className="navbar-left ">
        <ul>
          <Link to="/">
            <li>
              <img src={semilla} alt="logo" className="logo"></img>
            </li>
          </Link>
          <li>
            <Link to="/products" aria-current="page" href="#">
              PRODUCTS
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          {!user ? (
            <>
              <li>
                <Link to="/login" aria-current="page" href="#">
                  LOG IN
                </Link>
              </li>
              <li>
                <Link to="/register" href="#">
                  REGISTER
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={`/profile/${user.id}`} href="#">
                  {user.name?.toUpperCase()}
                  {/* {user.lasName} */}
                </Link>
              </li>
              <li>
                <a onClick={logoutHandler} aria-current="page" href="#">
                  LOG OUT
                </a>
              </li>
            </>
          )}
          <li className="navbar-shopping-cart">
            <Link to="/shopping-cart">
              <img src={carrito} alt="shopping cart" />
              <div>{cart.length}</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
