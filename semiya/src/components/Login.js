import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch,  } from "react-redux";
import { loginRequest, setUser } from "../state/user";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();


  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email: email.value, password: password.value }))
      .then(() => dispatch(setUser()))
      .then((user) => user.payload? navigate("/"): alert('No has sido logueado'))
      .catch((err) =>console.log(err) );
  };

  return (
    <>
      <div className="login">
        <form className="form" onSubmit={loginHandler}>
          <h2>Welcome Back!</h2>
          <div className="form-container">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              id="inputemail"
              placeholder="email@example.com"
              className="input input-email"
              {...email}
            />
          </div>
          <div className="form-container">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              className="input input-password"
              placeholder="Password"
              id="inputPassword"
              {...password}
            />
          </div>
          
          <button type="submit" className="primary-button signup-button">
            Log In
          </button>
          <br/>
  
          <button type="submit" className="secondary-button signup-button">
            <Link to="/Register">Register</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
