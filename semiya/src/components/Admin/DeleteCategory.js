import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRequest } from "../../state/admin/deleteForAdmin";
import { defaultCaqteogriesRequest } from "../../state/defaultCategories";


const DeleteCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = useSelector((state) => state.defaultCategories);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(deleteRequest({type: "categories",id: selectedCategory}))
    dispatch(defaultCaqteogriesRequest())
    navigate(`/profile/${user.id}/admin`)

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
          setSelectedCategory(parseInt(e.target.value));
        }}
      >
        <option defaultValue="">Select a Category</option>
        {categories.map((category, i) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="btn btn-danger littleMargin"
        onClick={submitHandler}
      >
        DELETE 🗑
      </button>
    </>
  );
};

export default DeleteCategory;
