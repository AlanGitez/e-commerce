import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
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
          {/* Descomentar esto para cuando tengamos a mano la persistencia */}
          {/* <div className="form-check mb-3">
            <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
            </label>
          </div> */}
          <button type="submit" className="primary-button signup-button">
            Log In
          </button>
          {/* Descomentar esto para cuando tengamos a mano la persistencia */}
          {/* <Link to="/ForgotPassword">
            <p>Forgot Password?</p>
          </Link> */}
          <button type="submit" className="secondary-button signup-button">
            <Link to="/Register">Register</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
