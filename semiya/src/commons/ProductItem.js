import React from 'react'
import {Link} from 'react-router-dom'

const ProductItem = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}>
    <div className="col">
    <div className="card">
      <img src={product?.image} className="card-img-top" alt={product.name}/>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product?.rating}</p>
        <button 
        type="button" 
        disable={product.stock? "false": "true"} 
        className="btn btn-success" >Add to Cart</button>
       
        <p className="card-text">{product.stock? "Hay Stock": "No contamos con Stock"}</p>
      </div>
    </div>
  </div>
    </Link>
  )
}

export default ProductItem;