import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myPurchasesRequest } from "../state/myPurchases";
import { singleProductRequest } from "../state/singleProduct";
import Table from "react-bootstrap/Table";
import { addToCart } from "../state/cart";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const UserPurchases = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myPurchasesRequest());
  }, []);
  const myPurchases = useSelector((state) => state.myPurchases);

  return (
    <>
      <h2>Your Purchases:</h2>
      <Table striped responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Cart</th>
            <th>Total Amount</th>
            <th>Shipped to</th>
            <th>Repeat Purchase</th>
          </tr>
        </thead>
        <tbody>
          {myPurchases.map((purchase, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{purchase.createdAt.slice(0, 10)}</td>
                <td>
              <Link to={`/profile/1/purchases/${purchase.id}`}>
                  {purchase.cart.lenght != 0 && (
                    <p style={{ fontSize: "0.75em", color:"black" }}>
                      {purchase.cart.slice(0, 4).map((product, i) => (
                       <> <span key={i}>
                          {i + 1}- {product.name}
                        </span>
                        <br/>
                        </>
                      ))}
                      {purchase.cart.lenght > 4 && <>...</>}
                    </p>
                  )}
              </Link>
                </td>
              <td>{purchase.totalAmount}</td>
              <td>{purchase.shippingAdress}</td>
              <td>
                <button
                  onClick={() => {
                    const products = purchase.cart.map((product) => {
                      return dispatch(singleProductRequest(product.id)).then(
                        (p) => p.payload
                      );
                    });
                    Promise.all(products)
                      .then((productos) =>
                        productos.map((product) => dispatch(addToCart(product)))
                      )
                      .then(() => navigate("/shopping-cart"))
                      .catch((err) => console.log(err));
                  }}
                  className="btn btn-success"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserPurchases;
//
