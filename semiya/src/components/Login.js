import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest, setUser } from "../state/user";



const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginRequest({email: email.value, password: password.value}))
    // .then(()=> dispatch(setUser()))
    .then(()=> navigate("/"));
  };


  return (
    <>
    <div className="container littleMargin justify-items-center">
      <h2>Welcome Back!</h2>
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="email@example.com"
            aria-describedby="emailHelp"
            {...email}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
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
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
      <Link to="/forgot-password">
        <p>Forgot Password?</p>
      </Link>
      </div>
    </>
  );
};

export default Login;
