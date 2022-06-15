import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NewProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.defaultCategories);
  const name = useInput();
  const price = useInput();
  const stock = useInput();
  const image = useInput();
  const fraccionable = useInput();

  // console.log("🚀 ~ file: NewProduct.js ~ line 12 ~ NewProduct ~ fraccionable", fraccionable.value)
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "🚀 ~ file: NewProduct.js ~ line 18 ~ submitHandler ~ name.value",
      name.value
    );
    console.log(
      "🚀 ~ file: NewProduct.js ~ line 20 ~ submitHandler ~ price.value",
      price.value
    );
    console.log(
      "🚀 ~ file: NewProduct.js ~ line 22 ~ submitHandler ~ stock.value",
      stock.value
    );
    console.log(
      "🚀 ~ file: NewProduct.js ~ line 24 ~ submitHandler ~ image.value",
      image.value
    );
    console.log(
      "🚀 ~ file: NewProduct.js ~ line 26 ~ submitHandler ~ user.value",
      user.value
    );
    console.log(
      "🚀 ~ file: NewProduct.js ~ line 12 ~ NewProduct ~ fraccionable",
      fraccionable.value
    );
  };

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Go to Admin</button>
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
        <label htmlFor="fraccionable" className="form-label">
          Fraccionable
        </label>
        <select
          className="form-select form-select-sm"
          aria-label="Small select"
          {...fraccionable}
        >
          <option defaultValue="">Select option</option>
          <option value={true}>Fraccionable</option>
          <option value={false}>Non-Fraccionable</option>
        </select>
        <p> </p>
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
        <br/>
        <select
          className="form-select form-select-sm"
          aria-label="Small select"
          onChange={(e) => {
            setSelectedCategory(e.target.id);
            console.log(
              "🚀 ~ file: UpdateCategory.js ~ line 30 ~ UpdateCategory ~ e.target.id",
              e.target
            );
          }}
        >
          <option defaultValue="">Categories</option>
          {categories.map((category, i) => (
            <option key={category.id} id={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit" className="btn btn-primary littleMargin">
          Submit
        </button>
      </form>
    </>
  );
};

export default NewProduct;
