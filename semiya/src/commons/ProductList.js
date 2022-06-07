import React from "react";
import {useSelector} from 'react-redux'
import ProductItem from "./ProductItem.js";
import Search from "./Search.js";

const ProductList = () => {
const filteredProducts=useSelector(state=>state.filteredProducts)
    return (
    <>
    <Search/>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {filteredProducts.map((product) => (
          <ProductItem product={product} />
          ))}
    </div>
    </>
  );
};

export default ProductList;
