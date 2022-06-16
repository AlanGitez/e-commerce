import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";
import { singleProductRequest } from "../state/singleProduct";
import { addToCart } from "../state/cart";
import AddCartButton from "../commons/AddCartButton";

const PastPurchase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { purchaseId } = useParams();
  const [items, setItems] = useState([]);

  const myPurchases = useSelector((state) => state.myPurchases);
  const myPurchase = myPurchases[purchaseId];

  useEffect(() => {
    const products = myPurchase.cart.map((product) => {
      return dispatch(singleProductRequest(product.id)).then((p) => p.payload);
    });
    Promise.all(products).then((productos) => setItems(productos));
  }, []);

  const clickHandler = () => {
    items.map((product) => dispatch(addToCart(product)));
    navigate("/shopping-cart");
  };

  return (
    <>
      <h2>The Purchase of {myPurchase.createdAt.slice(0, 10)}</h2>
      <Table striped responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Agregar este producto en individual</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock && "There is Stock"}</td>
              <td>
                {" "}
                <AddCartButton product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={clickHandler} className="btn btn-warning">
        Add all to cart
      </button>
    </>
  );
};

export default PastPurchase;
