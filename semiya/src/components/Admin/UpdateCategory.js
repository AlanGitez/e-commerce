import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { updateRequest } from "../../state/admin/updateForAdmin";
import { defaultCategoriesRequest } from "../../state/defaultCategories";

const UpdateCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = useSelector((state) => state.defaultCategories);
  const user = useSelector((state) => state.user);
  const newName = useInput();
  const dispatch = useDispatch()
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateRequest({
        type: "categories",
        id: selectedCategory,
        body: { name: newName.value },
      })
    )
      .then(() => dispatch(defaultCategoriesRequest()))
      .then(() => alert("Category updated"))
      .catch((error) => console.log(error));
  };
  
  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back to Admin</button>
      </Link>
      <h1>Update Category</h1>

      <select
        className="form-select form-select-sm"
        aria-label="Small select"
        onChange={(e) => {
          setSelectedCategory(parseInt(e.target.value))
        }}
      >
        <option defaultValue="">Categories</option>
        {categories.map((category, i) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <form onSubmit={submitHandler}>
        <label htmlFor="inputNewName" className="form-label">
          New Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputNewName"
          placeholder="New Name"
          aria-describedby="newNameHelp"
          {...newName}
        />
        <button type="submit" className="btn btn-primary littleMargin">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateCategory;
