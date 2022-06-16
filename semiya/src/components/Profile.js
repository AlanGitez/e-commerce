import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {/* <div>
        <Link to="admin" className="nav-link active">
          <button className="btn btn-success">Admin</button>
        </Link>
      </div> */}
      <div className="container">
        <h4>Name:</h4>
        <h6>{user.name}</h6>
        <h4>Last Name:</h4>
        <h6>{user.lastName}</h6>
        <h4>Email:</h4>
        <h6>{user.email}</h6>
        <h4>Address:</h4>
        <h6>{user.address ? user.address : "No saved addresses yet"}</h6>
        <button className="btn btn-primary">Edit</button>
        <Link to={`/profile/${user.id}/purchases`} className="nav-link active">
          <button className="btn btn-warning">Your Purchases</button>
        </Link>
        
      </div>
    </>
  );
};

export default Profile;
