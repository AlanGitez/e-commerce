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
          .then(() => dispatch(setUser()))
          .then(() => navigate(`/profile/${user.id}/admin`))
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
          </form>
        </>
      ) : (
        <>
          <h3>Admin</h3>
          <div className="container">
            <Link to={`/profile/${user.id}`}>
              <button className="btn-lg btn-success littleMargin">
                Back to Profile
              </button>
            </Link>
          </div>
          <br />
          <div className="container">
            <div className="container">
              <Link to="new-product">
                <button className="btn-lg btn-success littleMargin">
                  + Products
                </button>
              </Link>
              {/* <Link to="update-product">
                <button className="btn-lg btn-warning littleMargin">
                  🛠 Products
                </button>
              </Link> */}
              <Link to="delete-product">
                <button className="btn-lg btn-danger littleMargin">
                  🗑 Products
                </button>
              </Link>
            </div>
            <br />
            <div className="container">
              <Link to="new-category">
                <button className="btn-lg btn-success littleMargin">
                  + Categories
                </button>
              </Link>
              <Link to="update-category">
                <button className="btn-lg btn-warning littleMargin">
                  🛠 Categories
                </button>
              </Link>
              <Link to="delete-category">
                <button className="btn-lg btn-danger littleMargin">
                  🗑 Categories
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
