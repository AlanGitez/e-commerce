import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 import useInput from "../hooks/useInput";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { singleProductRequest } from "../state/singleProduct";
import Navbar from "../components/Navbar";
import AddCartButton from "./AddCartButton";
import axios from 'axios'


const ProductDetail = () => {
  const newReview = useInput();
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(singleProductRequest(id));
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .put("/api/reviews", newReview.value)
      .then((result) => alert("Thank you, we love to hear what you think!"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
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
              <p className="card-text">{singleProduct.description}</p>
              <p className="card-text">$:{singleProduct.price}</p>
              <AddCartButton product={singleProduct} />
              <p className="card-text">
                {singleProduct.stock ? "Hay Stock" : "No contamos con Stock"}
              </p>

              <div className="form-group shadow-textarea ">
                <form id="formId" onSubmit={handlerSubmit}>
                  <label htmlFor="exampleFormControlTextarea6">DEJANOS TU COMENTARIO!</label>

                  <textarea className="form-control z-depth-1 shadow" 
                  id="exampleFormControlTextarea6" 
                  rows="3" 
                  placeholder="Write something here..."
                  // onKeyDown={textAreaSubmitEvent}
                  {...newReview}></textarea>

                  <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    id="input-group-button-right">
                    Search
                  </button>

                </form>
              </div>



              {user?.type === "admin" && (
                <>
                  <p className="card-text">{`Stock: ${singleProduct.stock}`}</p>
                  <Link to={`/profile/${user.id}/admin/update-product`}>
                    <button className="btn btn-warning littleMargin">
                      🛠 Product
                    </button>
                  </Link>
                  <Link to={`/profile/${user.id}/admin/delete-product`}>
                    <button className="btn btn-danger littleMargin">
                      🗑 Products
                    </button>
                  </Link>
                </>
              )}
              {!user?.type && (
                <p className="card-text">
                  {singleProduct.stock ? "Hay Stock" : "No contamos con Stock"}
                </p>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
