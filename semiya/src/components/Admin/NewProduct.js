import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../../state/admin/addForAdmin";
import { defaultProductRequest } from "../../state/defaultProducts";

const NewProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.defaultCategories);
  const name = useInput();
  const price = useInput();
  const stock = useInput();
  const image = useInput();
  const fraccionable = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log("🚀 ~ file: NewProduct.js ~ line 12 ~ NewProduct ~ fraccionable", fraccionable.value)
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addRequest({
        type: "products",
        body: {
          name: name.value,
          price: parseInt(price.value),
          stock: parseInt(stock.value),
          image: image.value,
          fraccionable: Boolean(fraccionable.value),
          categories: {name: selectedCategory},
        },
      })
    )
      .then(() => dispatch(defaultProductRequest()))
      .then(() => navigate("/products"))
      .catch((error) => console.log(error));
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
        <br />
        <select
          className="form-select form-select-sm"
          aria-label="Small select"
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
        >
          <option defaultValue="">Categories</option>
          {categories.map((category) => (
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
