import React from "react";
import useInput from "../Hooks/useInput";
import { useDispatch } from "react-redux";
import { filteredProductRequest } from "../state/filteredProducts";

const Search = () => {
  const product=useInput()
  const category=useInput()
  const dispach=useDispatch();

  const submitHandler=(e)=>{
    e.preventDefault();
    dispach(filteredProductRequest(product.value))
  }

  return (
    <form onSubmit={submitHandler}>
      <div class="mb-3">
        <label for="Product" class="form-label">
          Product:
        </label>
        <input
        {...product}
          type="text"
          class="form-control"
        />
      </div>
      {/* Aca irian las categorias <select class="form-select" aria-label="Default select example">
        <option {...category} selected>Categories</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select> */}
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Search;
