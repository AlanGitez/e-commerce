import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem.js";
import Navbar from "../components/Navbar";

const ProductList = () => {
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const defaultProducts = useSelector((state) => state.defaultProducts);

  return (
    <>
     <Navbar/>
      {/* {!filteredProducts && ( */}
      <div className="container-sm">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {defaultProducts.length!=0 &&
            (filteredProducts||defaultProducts).map((product,i) => <ProductItem key={i} product={product} />)}
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default ProductList;
