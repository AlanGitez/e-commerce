import React from "react";
import { useSelector } from "react-redux";
import useInput from "../Hooks/useInput";
import axios from 'axios'

const ProductDetail = () => {
const newReview=useInput()
  const singleProduct = useSelector((state) => state.singleProduct)

  const handleClick=()=>{
    axios.put('', newReview.value)
    .then((result)=>alert('Thank you, we love to hear what you think!'))
    .catch((err)=>console.log(err))
  }

  return (
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="..." class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {singleProduct.name} {singleProduct.rating}
            </h5>
            <p class="card-text">{singleProduct.description}</p>
            <button
              type="button"
              disable={singleProduct.stock ? "false" : "true"}
              class="btn btn-success"
            >
              Add to Cart
            </button>
            <p class="card-text">
              {singleProduct.stock ? "Hay Stock" : "No contamos con Stock"}
            </p>
            {/* COMENTADO XQ NO SABEMOS SI VIENE COMO ARRAY
            {singleProduct.reviews.length && (
              <>
                <h6>Reviews:</h6>
                <ul class="list-group list-group-flush">
                  {singleProduct.reviews.map((review) => (
                    <li class="list-group-item">{review.description}</li>
                  ))}
                </ul>
              </>
            )} */}
            <div class="input-group">
              <span onClick={handleClick} class="input-group-text">Add a review:</span> 
              <textarea {...newReview}
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
