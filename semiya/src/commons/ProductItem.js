import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import noImg from "../assets/noImg.jpeg";

import AddCartButton from "./AddCartButton";

const ProductItem = ({ product }) => {
  const user = useSelector((state) => state.user);

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      {/* <section className="main-container"> */}
        {/* <div className="col"> */}
        {/* <div className="product-card"> */}
        <div className="espacio-mini"></div>
        <img
          src={product.image ? product.image : noImg}
          className="card-img-top" // {/* Esta clase no existe */}
          alt={product.name}
        />
        <div className="product-info">
          <p>{product?.snippet}</p>
          <p>{product?.rating}</p>

          {user?.type === "admin" && <p>{`Stock: ${product.stock}`}</p>}
          {!user?.type && (
            <p>{product.stock ? "Hay Stock" : "No contamos con Stock"}</p>
          )}
          <AddCartButton product={product} />
        </div>
        {/* </div> */}
        {/* </div> */}
      {/* </section> */}
    </Link>
  );
};

export default ProductItem;
