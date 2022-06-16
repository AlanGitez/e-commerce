import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { editUserRequest, setUser } from "../state/user";


const Profile = () => {
  const dispatch = useDispatch();
  const email = useInput();
  const address = useInput();
  const user = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUserRequest({
        id: user.id,
        body: { email: email.value||user.email, address: address.value||user.address },
      })
    )
      .then(() => dispatch(setUser()))
      .then(() => setEdit(false))
      .then(() => alert("Tus datos han sido actualizados."))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* <div>
        <Link to="admin" className="nav-link active">
          <button className="btn btn-success">Admin</button>
        </Link>
      </div> */}
      <div className="container mt-5 border shadow p-5">
        <form onSubmit={handlerSubmit}>
          <h4>Name:</h4>
          <h6>{user.name}</h6>
          <h4>Last Name:</h4>
          <h6>{user.lastName}</h6>
          <h4>Email:</h4>
          {edit ? (
            <div className="form-container">
              <input
                type="text"
                id="inputemail"
                placeholder="email@example.com"
                className="input input-email"
                {...email}
              />
            </div>
          ) : (
            <h6>{user.email}</h6>
          )}
          <h4>Address:</h4>
          {edit ? (
            <div className="form-container">
              <input
                type="text"
                id="inputemail"
                placeholder="Tu direccion"
                className="input input-email"
                {...address}
              />
            </div>
          ) : (
            <h6>{user.address ? user.address : "No saved addresses yet"}</h6>
          )}

          <input style={{ display: "none" }} />
          {edit && (
            <button type="submit" className="btn btn-success">
              Confirm Edit
            </button>
          )}
        </form>
        <div className="row mt-5">
        <div className="col">
        <button onClick={handleClick} type="submit" className="btn btn-primary">
          {edit ? "Back" : "Edit"}
        </button>
        </div>
        <div className="col">
        <Link to={`/profile/${user.id}/purchases`} className="nav-link active">
          <button className="btn btn-warning">Your Purchases</button>
        </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
