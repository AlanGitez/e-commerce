import React from "react";
import { Link, useNavigate } from "react-router-dom";
import semilla from "../iconos/logoSemiYa.svg";
import { logoutRequest, setUser } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import carrito from "../iconos/icon_shopping_cart.svg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user= useSelector(state => state.user)


  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutRequest())
      .then(() => dispatch(setUser()))
      .then(() => navigate("/login"));
  };

  return (

    <nav className="navbar-left ">
            <div>
        <ul>
          <li>
            <img src={semilla} alt="logo" class="logo"></img>
          </li>
          <li>
            <Link to="/">
              INICIO
            </Link>

          </li>        
          <li>
              <Link to="/products" href="/">      
                PRODUCTOS
              </Link>
          </li> 
          <li>
              <Link to="/shopping-cart" href="/">      
                SHOPPING CART
              </Link>
          </li>
        </ul>  
      </div> 
      
      <div class="navbar-right">
          <ul>
          <li>
              <Link to="/login" href="/">      
                LOG IN
              </Link>
          </li>
          <li>
              <Link to="/register" href="/">      
                REGISTER
              </Link>
          </li>   
          <li class="navbar-shopping-cart">
              <img src={carrito} alt="shopping cart"/>
              <div>0</div>
          </li>     
            

          </ul>
        </div>

      
</nav>
           
  
  );
};

export default Header;
