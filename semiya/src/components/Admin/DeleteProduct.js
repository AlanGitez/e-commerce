import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProductRequest } from "../../state/singleProduct";
import { deleteRequest } from "../../state/admin/deleteForAdmin";
import { defaultProductRequest } from "../../state/defaultProducts";

const DeleteProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.defaultProducts);
  const singleProduct = useSelector((state) => state.singleProduct);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(deleteRequest({ type: "products", id: selectedProduct }));
    dispatch(defaultProductRequest())
    navigate(`/products`)
  };

  useEffect(() => {
    dispatch(singleProductRequest(selectedProduct));
  }, [selectedProduct]);

  return (
    <>
      <Link to={`/profile/${user.id}/admin`}>
        <button className="btn btn-success littleMargin">Back</button>
      </Link>
      <h1>PRODUCT TO DELETE 🗑</h1>
      <select
        className="form-select form-select-sm"
        aria-label="Small select"
        onChange={(e) => {
          setSelectedProduct(parseInt(e.target.value));
        }}
      >
        <option defaultValue={singleProduct?.id ? singleProduct.name : ""}>{"Select a product"}</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <br />
      {selectedProduct !== 0 && (
        <>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={singleProduct.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {singleProduct.name} {singleProduct.rating}
                  </h5>
                  <p className="card-text">ID :{singleProduct.id}</p>
                  <p className="card-text">{singleProduct.description}</p>
                  <p className="card-text">$ {singleProduct.price}</p>
                  <p className="card-text">Stock: {singleProduct.stock}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <br />
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

export default DeleteProduct;
