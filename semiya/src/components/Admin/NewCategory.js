import React from "react";
import useInput from "../../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../../state/admin/addForAdmin";
import { defaultCaqteogriesRequest } from "../../state/defaultCategories";

const NewCategory = () => {
  const user = useSelector((state) => state.user);
  const name = useInput();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addRequest({type: "categories", body: {name: name.value}}))
    .then(()=>dispatch(defaultCaqteogriesRequest()))
    .then(()=>navigate(`/profile/${user.id}/admin`))
    .catch(error => console.log(error))
  };

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back to Admin</button>
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
