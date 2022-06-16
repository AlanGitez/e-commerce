import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart, removeOne } from "../state/cart";
import { useSelector } from "react-redux";

const CartItem = ({ product }) => {
  const cart = useSelector(state => state.cart)
  // const amount = cart.reduce((item, ac) => item.id == product.id && ac++)
  const [quantity, setQuantity] = useState({amount: 1, trigger: ""});
  const dispatch = useDispatch();
  // const quantity = useInput();
  
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteFromCart(product));
    !cart.length && localStorage.removeItem("cart");
  }
  
  const increase = (e) => {
    e.preventDefault();
    setQuantity({amount: ++quantity.amount, trigger: "increase"});
  };
  
  const decrease = (e) => {
    e.preventDefault();
      quantity.amount > 1 && setQuantity({amount: --quantity.amount, trigger: "decrease"});
  };

  useEffect(() => {
    if(quantity.trigger == "increase"){
      dispatch(addToCart(product));
      setQuantity({amount: quantity.amount, trigger: ""})
    }
    if(quantity.trigger == "decrease"){
        
      dispatch(removeOne(product));
      setQuantity({amount: quantity.amount, trigger: ""})
        
    }
  }, [quantity])
  
  return (
    <>
      <li className="list-group-item">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-2">
            <img
              src={product?.image}
              className="card-img-top"
              alt={product.name}
              style={{ width: "5em", height: "5em" }}
            />
          </div>
          <div className="col-6">
            <strong>{product.name}</strong>
          </div>
          <div className="col-1" id={product.id}>

          <button onClick={increase}>+</button>
          <p>{quantity.amount || 1}</p>
          <button onClick={decrease}>-</button>
            

          </div>
          <div className="col-3">
            <strong>
              Subtotal ${product.price * quantity.amount || 0}
              
            </strong>
          </div>

          <button className="delete btn" onClick={handleDelete}> Eliminar Producto </button>
        </div>
      </li>
    </>

    // <div>
    //   <h4>{products.name}</h4>
    //   <h5>${products.price}</h5>
    //   <button onClick={deleteSingleProduct}>Delete</button>
    //   {/* <button onClick={}>+</button>
    //   <button onClick={}>-</button> */}
    // </div>
  );
};

export default CartItem;
