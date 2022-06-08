import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../Hooks/useInput";
import axios from 'axios'
import {useParams} from 'react-router'
import { singleProductRequest } from "../state/singleProduct";

const ProductDetail = () => {
const newReview=useInput()
const {id}=useParams()
const dispach=useDispatch()
const singleProduct = useSelector((state) => state.singleProduct)

useEffect(()=>{
  dispach(singleProductRequest(id))
  console.log(singleProduct)
},[])

  //falta direccion de axios
  const handleClick=()=>{
    axios.put('', newReview.value)
    .then((result)=>alert('Thank you, we love to hear what you think!'))
    .catch((err)=>console.log(err))
  }

  return (
    <>
     <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={singleProduct.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {singleProduct.name} {singleProduct.rating}
            </h5>
            <p className="card-text">{singleProduct.description}</p>
            <p className="card-text">{singleProduct.price}</p>
            <button
              type="button"
              // disable={singleProduct.stock ? "false" : "true"}
              className="btn btn-success"
              >
              Add to Cart
            </button>
            <p className="card-text">
              {singleProduct.stock ? "Hay Stock" : "No contamos con Stock"}
            </p>
            {/* COMENTADO XQ NO SABEMOS SI VIENE COMO ARRAY
            {singleProduct.reviews.length && (
              <>
              <h6>Reviews:</h6>
              <ul className="list-group list-group-flush">
              {singleProduct.reviews.map((review) => (
                <li className="list-group-item">{review.description}</li>
                ))}
                </ul>
                </>
              )} */}
            <div className="input-group">
              <span onClick={handleClick} className="input-group-text">Add a review:</span> 
              {/* <textarea {...newReview}
                className="form-control"
                aria-label="With textarea"
              ></textarea> */}
            </div>
          </div>
        </div>
      </div>
    // </div>
              </>
  );
};

export default ProductDetail;
