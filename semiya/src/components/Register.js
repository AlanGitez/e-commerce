import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import useEmailValidity from "../hooks/useEmailValidity";
import usePasswordValidity from "../hooks/usePasswordValidity";


const Register = () => {
  const name = useInput();
  const lastName = useInput();
  const address = useInput();
  const navigate = useNavigate();
  const email = useEmailValidity();
  const password = usePasswordValidity();

  const loginHandler = (e) => {
    e.preventDefault();
    if (email.validity && password.validity)
      axios
        .post("/api/users/register", {
          name: name.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
          address: address.value,
        })
        .then(() => navigate("/login"))
        .catch((error) => console.log("Register/Axios error: ", error));
  };

  return (    
    <div className="login">
      <form  className="form" onSubmit={loginHandler}>
      <h2>Hello New User!</h2>
        <div className="form-container">
          <label htmlFor="email" className="label">
            Name
          </label>
          <input
            type="text"
            className="input input-email"
            id="inputName"
            placeholder="Name"
            {...name}
          />
        </div>
        <div className="form-container">
          <label htmlFor="email" className="label">
            Lastname
          </label>
          <input
            type="text"
            className="input input-email"
            id="inputLastName"
            placeholder="LastName"
            {...lastName}
          />
        </div>

        <div className="form-container">
          <label htmlFor="inputEmail" className="label">

            Email address
          </label>
          <input
            type="email"

            className="input input-email"
            id="inputEmail"

            placeholder="email@example.com"
            aria-describedby="emailHelp"
            {...email}
          />
          {!email.validity && (
            <p style={{ color: "red", fontWeight: "bolder" }}>Invalid email</p>
          )}
        </div>
        <div className="form-container">
          <label htmlFor="email" className="label">
            Password
          </label>
          <input
            type="password"
            className="input input-email"
            placeholder="Password"
            id="exampleInputPassword1"
            {...password}
          />
          {!password.validity && (
            <p style={{ color: "red", fontWeight: "bolder" }}>
              Password must have at least 8 characters, one number and one
              letter.
            </p>
          )}
        </div>
        <div className="form-container">
          <label htmlFor="password" className="label">
            Address
          </label>
          <input
            type="text"
            className="input input-email"
            id="inputadress"
            placeholder="Address"
            aria-describedby="addressHelp"
            {...address}
          />
        </div >
        <div className="form-container">
        {email.value.length && password.value.length ? (
          <button type="submit" className="primary-button signup-button">
              Register           
          </button>
        ) : (
          <button type="submit" className="primary-button signup-button" disabled={true}>
            Register
          </button>
        )}
        </div>        
        <p>Are you already a user?</p>

        <button type="submit" className="secondary-button signup-button">
          <Link to="/Login">
              Log In
            </Link>
        </button>             
      </form>
      
        
      
    </div>
  );
};

export default Register;
