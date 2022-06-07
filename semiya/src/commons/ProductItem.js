import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div class="col">
    <div class="card">
      <img src={product?.image} class="card-img-top" alt={product.name}/>
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">{product.rating}</p>
        <button type="button" disable={product.stock? "false": "true"} class="btn btn-success">Add to Cart</button>
        <p class="card-text">{product.stock? "Hay Stock": "No contamos con Stock"}</p>
      </div>
    </div>
  </div>
  )
}

export default ProductItem

