import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";

const UpdateCategory = () => {
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
      <h1>Aca va el dropdown de categorias</h1>
      {/* <select
          className="form-select form-select-sm"
          aria-label="Small select"
        >
          <option defaultValue="">Categories</option>
          {categories.map((category, i) => (
            <option onClick={()=>dispach(setWayToFilter(category.name))} key={i} value={category.name}>
              {category.name}
            </option>
          ))}
        </select> */}
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

export default UpdateCategory;
