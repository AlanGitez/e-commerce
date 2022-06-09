import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest } from "../state/user";



const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginRequest({email: email.value, password: password.value}))
    navigate("/");
  };

  return (
    <>
      <h2>Login</h2>
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
        {/* <div class="form-check mb-3">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to="/register">
        <p>Register</p>
      </Link>
      <Link to="/forgot-password">
        <p>Forgot Password?</p>
      </Link>
    </>
  );
};

export default Login;
