import React from "react";
import { Link, useNavigate } from "react-router-dom";
import semilla from "../assets/logosemiya.png";
import { logoutRequest, setUser } from "../state/user";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user= useSelector(state => state.user)


  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutRequest())
      .then(() => dispatch(setUser()))
      .then(() => navigate("/login"))
      .catch(err=> console.log(err));
  };

  return (
    <nav className="prueba navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          <img src={semilla} alt="card-horizontal-image" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* Falta la logica de si estas logeado, te muestre logout, y sino Log in y Sign In */}
            <Link
              to="/products"
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Productos
            </Link>
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Log In
                </Link>
                <Link to="/register" className="nav-link active" href="#">
                  Register
                </Link>
              </>
            ) : (
              <>
              {user.name}
              <a
                onClick={logoutHandler}
                className="nav-link active"
                aria-current="page"
                href="#"
                >
                Log Out
              </a>
              </>
            )}
            <Link to="/shopping-cart" className="nav-link active" href="#">
              Shopping Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
