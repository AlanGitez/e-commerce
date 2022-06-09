import React from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { filteredProductRequest } from "../state/filteredProducts";
import { useNavigate } from "react-router";

const Search = () => {
  const navigate=useNavigate()
  const product = useInput();
  // const category = useInput();
  const dispach = useDispatch();

  const submitHandler = (e) => {
    console.log('esto funciona',  typeof product.value)
    e.preventDefault();
    dispach(filteredProductRequest( product.value));
    navigate("/products")
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <input
            {...product}
            type="text"
            className="form-control"
            placeholder="What are you looking for?"
            aria-label="Username"
            aria-describedby="input-group-button-right"
          />
          <button
            type="submit"
            className="btn btn-outline-secondary"
            id="input-group-button-right"
          >
            Search
          </button>
        </div>
        {/* Aca irian las categorias <select className="form-select" aria-label="Default select example">
        <option {...category} selected>Categories</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select> */}

      </form>
    </div>
  );
};

export default Search;
