import React from "react";
import useInput from "../../hooks/useInput";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NewCategory = () => {
  const user = useSelector((state) => state.user);
  const name = useInput();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back</button>
      </Link>
      <form onSubmit={submitHandler}>
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
        <button type="submit" className="btn btn-primary littleMargin">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewCategory;
