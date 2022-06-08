import React, { useState } from "react";
import useInput from "../Hooks/useInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const name = useInput();
  const lastName = useInput();
  const address = useInput();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailValidity, setEmailValidity] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValidity, setPasswordValidity] = useState(true);

  const checkEmailValidity = (e) => {
    let validEmail = new RegExp(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    console.log("Name de target:", e.target.value);
    setEmail(e.target.value);
    validEmail.test(e.target.value)
      ? setEmailValidity(true)
      : setEmailValidity(false);
  };

  const checkPasswordValidity = (e) => {
    let validPassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    console.log("Name de target:", e.target.value);
    setPassword(e.target.value);
    console.log(validPassword.test(e.target.value));
    validPassword.test(e.target.value)
      ? setPasswordValidity(true)
      : setPasswordValidity(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (emailValidity && passwordValidity)
      axios
        .post("/api/users/register", {
          name: name.value,
          lastName: lastName.value,
          email: email,
          password: password,
          address: address.value,
        })
        .then(() => navigate("/"))
        .catch((error) => console.log("Register/Axios error: ", error));
  };

  return (
    <>
      <h2>Register</h2>
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
            onChange={checkEmailValidity}
          />
          {!emailValidity && (
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
            onChange={checkPasswordValidity}
          />
          {!passwordValidity && (
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
        {email.length && password.length ? (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled={true}>
            Submit
          </button>
        )}
      </form>
    </>
  );
};

export default Register;
