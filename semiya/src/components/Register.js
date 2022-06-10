import React from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";
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
    <div className="container littleMargin">
      <h2>Hello New User!</h2>
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Name"
            aria-describedby="nameHelp"
            {...name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputLastName" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder="LastName"
            aria-describedby="lastNameHelp"
            {...lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="email@example.com"
            aria-describedby="emailHelp"
            {...email}
          />
          {!email.validity && (
            <p style={{ color: "red", fontWeight: "bolder" }}>Invalid email</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
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
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
            aria-describedby="addressHelp"
            {...address}
          />
        </div>
        {email.value.length && password.value.length ? (
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled={true}>
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
