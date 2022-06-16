import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AddCartButton from "./AddCartButton";

const ProductItem = ({ product }) => {
  // const cart = useSelector(state => state.cart);
  const user = useSelector((state) => state.user);
  // const [storageCart, setStorageCart] = useLocalStorage("cart", []);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="col">
        <div className="card">
          <img
            src={product?.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product?.rating}</p>
            <AddCartButton product={product} />

            {user?.type === "admin" && (
              <p className="card-text">{`Stock: ${product.stock}`}</p>
            )}
            {!user?.type && (
              <p className="card-text">
                {product.stock ? "Hay Stock" : "No contamos con Stock"}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
