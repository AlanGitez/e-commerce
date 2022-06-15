import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { promoteAdminRequest, setUser } from "../state/user";

const Admin = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminPassword = useInput();
  const adminHandler = (e) => {
    e.preventDefault();
    console.log("Entrando al submit");
    const password = "Almendras123";
    password !== adminPassword.value
      ? navigate(`/profile/${user.id}`)
      : dispatch(promoteAdminRequest({ id: user.id }))
          // .then(() => navigate(`/profile/${user.id}`))
          // .then(() => {
          //   console.log("Entre al then post dispatch promote");
          //   dispatch(logoutRequest());
          //   console.log("Esto es port dispatch de logoutRequest");
          // })
          .then(() => dispatch(setUser()))
          .then(() => navigate(`/profile/${user.id}`))
          .catch((error) => console.log("Promote error", error));
  };

  return (
    <>
      {user.type !== "admin" ? (
        <>
          <form onSubmit={adminHandler}>
            <div className="mb-3">
              <label htmlFor="inputAdminPassword" className="form-label">
                Admin Code:
              </label>
              <input
                type="text"
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
          </form>
        </>
      ) : (
        <>
          <div className="container">
            <Link to="new-product">
              <button className="btn btn-success littleMargin">+ Products</button>
            </Link>
            <Link to="update-product">
              <button className="btn btn-success littleMargin">🛠 Products</button>
            </Link>
            <Link to="new-category">
              <button className="btn btn-success littleMargin">+ Categories</button>
            </Link>
            <Link to="update-category">
              <button className="btn btn-success littleMargin">🛠 Categories</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;