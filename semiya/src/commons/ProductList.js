import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem.js";
import Navbar from "../components/Navbar";

const ProductList = () => {
  const renderedProducts = useSelector((state) => state.renderedProducts);

  return (
    <>
      <Navbar />
      <div className="main-container"> {/* Esta clase no existe */}
        <div className="cards-container"> 
          {renderedProducts.map((product, i) => (
            <ProductItem key={i} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
