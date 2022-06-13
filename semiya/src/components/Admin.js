import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { userReducer } from "../state/user";

const Admin = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const adminPassword = useInput();
  const adminHandler = () => {
    const password = "Almendras123";
    password !== adminPassword.value
      ? navigate("/profile")
      : console.log("Ahora sos admin");
  };

  return (
    <>
      {user.type !== "admin" ? (
        <>
          <from onSubmit={adminHandler}>
            <div className="mb-3">
              <label htmlFor="inputAdminPassword" className="form-label">
                Admin Code:
              </label>
              <input
                type="password"
                className="form-control"
                id="inputAdminPassword"
                placeholder="Admin Code..."
                aria-describedby="nameHelp"
                {...adminPassword}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Register
            </button>
          </from>
        </>
      ) : (
        <>
          <p>Hola</p>
        </>
      )}
    </>
  );
};

export default Admin;
