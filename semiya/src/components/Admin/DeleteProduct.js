import React, { useState } from "react";
// import useInput from "../../hooks/useInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { singleProductRequest } from "../../state/singleProduct";

const DeleteProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.defaultProducts);
  const singleProduct = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch;
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "🚀 ~ file: UpdateProduct.js ~ line 8 ~ UpdateProduct ~ selectedProduct",
      selectedProduct
    );
  };

  // useEffect(()=>{
  //   dispatch(singleProductRequest(selectedProduct));

  //   console.log("🚀 Desde useEffect", selectedProduct)
  // }, [])

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back</button>
      </Link>
      <h1>Aca va el dropdown de productos</h1>
      <select
        className="form-select form-select-sm"
        aria-label="Small select"
        onChange={(e) => {
          setSelectedProduct(parseInt(e.target.value));
        }}
      >
        <option defaultValue={""}>{"Select a product"}</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary littleMargin" onClick={submitHandler}>
        Submit
      </button>
    </>
  );
};

export default DeleteProduct;
