import React from "react";
import useInput from "../../hooks/useInput";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateProduct = () => {
  const user = useSelector((state) => state.user);
  const name = useInput();
  const price = useInput();
  const stock = useInput();
  const fraccionable = useInput();
  const image = useInput();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back</button>
      </Link>
      <h1>Aca va el dropdown de productos</h1>
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
        <label htmlFor="inputPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="inputPrice"
          placeholder="Price"
          aria-describedby="priceHelp"
          {...price}
        />
        <label htmlFor="inputStock" className="form-label">
          Stock
        </label>
        <input
          type="number"
          className="form-control"
          id="inputStock"
          placeholder="Stock"
          aria-describedby="stockHelp"
          {...stock}
        />
        <label htmlFor="inputFraccionable" className="form-label">
          Fraccionable
        </label>
        <input
          type="boolean"
          className="form-control"
          id="inputFraccionable"
          placeholder="Fraccionable"
          aria-describedby="fraccionableHelp"
          {...fraccionable}
        />
        <label htmlFor="inputImage" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="inputImage"
          placeholder="Image"
          aria-describedby="imageHelp"
          {...image}
        />
        <h1>Aca va el dropdown de categorias</h1>
        <button type="submit" className="btn btn-primary littleMargin">
          Submit
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;
