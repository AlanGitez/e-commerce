import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem.js";
import Search from "./Search.js";

const ProductList = () => {

  // const filteredProducts = useSelector((state) => state.filteredProducts);
 const defaultProducts=useSelector((state)=>state.defaultProducts)
  
  return (
    <>
      <Search />
      {/* {!filteredProducts && ( */}
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {defaultProducts && defaultProducts.map((product) => (
            <ProductItem product={product} key={product.id}/>
          ))}
        </div>
      {/* )} */}
    </>
  );
};

export default ProductList;
