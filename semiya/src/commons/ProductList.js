import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem.js";
import Navbar from "../components/Navbar";

const ProductList = () => {
  const renderedProducts = useSelector((state) => state.renderedProducts);

  return (
    <>
      <Navbar />
      <div className="container-sm">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {renderedProducts.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
