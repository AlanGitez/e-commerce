import React, { useState, useEffect} from "react";
// import useInput from "../../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProductRequest } from "../../state/singleProduct";
import { updateRequest } from "../../state/admin/updateForAdmin";
import { defaultProductRequest } from "../../state/defaultProducts";

const UpdateProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const user = useSelector((state) => state.user);
  // const products = useSelector((state) => state.defaultProducts);
  const singleProduct = useSelector((state) => state.singleProduct);
  const [name, setName] = useState(singleProduct?.name);
  const [price, setPrice] = useState(singleProduct?.price);
  const [stock, setStock] = useState(singleProduct?.stock);
  const [fraccionable, setFraccionable] = useState(singleProduct?.fraccionable);
  const [image, setImage] = useState(singleProduct?.image);
  const [description, setDescription] = useState(singleProduct?.description);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateRequest({type: "products", id: singleProduct.id, body: {name, price, stock, fraccionable, image, description}}))
    dispatch(defaultProductRequest())
    navigate(`/product/${selectedProduct}`)
  };

  useEffect(()=>{
    dispatch(singleProductRequest(selectedProduct));

    console.log("🚀 Desde useEffect", selectedProduct)
  }, [selectedProduct])

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back</button>
      </Link>
      <h1>Product to update</h1>
      {/* <select
        className="form-select form-select-sm"
        aria-label="Small select"
        onChange={(e) => {
          setSelectedProduct(parseInt(e.target.value));
          // dispatch(singleProductRequest(parseInt(e.target.value)))
          // dispatch(singleProductRequest(selectedProduct))
        }}
      >
        <option defaultValue={singleProduct.id}>{singleProduct.name}</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select> */}
      <div>
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
            defaultValue={singleProduct.name ? singleProduct.name : ""}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            defaultValue={singleProduct.price ? singleProduct.price : ""}
            onChange={(e) => {
              setPrice(parseInt(e.target.value));
            }}
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
            defaultValue={singleProduct.stock ? singleProduct.stock : ""}
            onChange={(e) => {
              setStock(parseInt(e.target.value));
            }}
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
            defaultValue={
              singleProduct.fraccionable ? singleProduct.fraccionable : false
            }
            onChange={(e) => {
              setFraccionable(e.target.value);
            }}
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
            defaultValue={singleProduct.image ? singleProduct.image : ""}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDescription"
            placeholder="Description"
            aria-describedby="DescriptionHelp"
            defaultValue={singleProduct.description ? singleProduct.description : ""}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {/* <select
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
                <option
                  key={category.id}
                  id={category.id}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}
            </select> */}
          <button type="submit" className="btn btn-primary littleMargin">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
