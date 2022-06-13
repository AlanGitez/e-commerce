import React from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { filteredProductRequest } from "../state/filteredProducts";
import { useNavigate } from "react-router";

const Search = () => {
  const navigate=useNavigate()
  const product = useInput();
  const category = useInput();
  const dispach = useDispatch();


  const submitHandler = (e) => {
    e.preventDefault();
    const nameQuery= {value:product.value, type:'name'}
    const categoryQuery= {value:category.value, type: 'category'}
    product.value? 
    (dispach(filteredProductRequest(nameQuery)))
    :
    (dispach(filteredProductRequest(categoryQuery)))
    .then(navigate("/products"))
    .catch(err=> console.log (err))
  };

  return (
    <div className="container littleMargin">
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
      
       <select class="form-select form-select-sm" aria-label="Small select" {...category}>
  <option selected="">Categories</option>
  {/* Tomy: Aca iria un map de las diferentes categorias que seedemos */}
  <option value="Lacteos">Lacteos</option>
  <option value="Aceites">Aceites</option>
  <option value="Frutos Secos">Frustos Secos</option>
</select>
      

      </form>
    </div>
  );
};

export default Search;
