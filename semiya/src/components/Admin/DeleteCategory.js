import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";

const DeleteCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = useSelector((state) => state.defaultCategories);
  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back</button>
      </Link>
      <h1>Update Category</h1>

      <select
        className="form-select form-select-sm"
        aria-label="Small select"
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          console.log(
            "🚀 ~ file: UpdateCategory.js ~ line 30 ~ UpdateCategory ~ e.target.value",
            e.target.value
          );
        }}
      >
        <option defaultValue="">Select a Category</option>
        {categories.map((category, i) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <button type="submit" className="btn btn-primary littleMargin">
        Submit
      </button>
    </>
  );
};

export default DeleteCategory;
