import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";

const CheckOut = () => {
  const totalAmount = useSelector((state) => state.totalAmount);
  const user = useSelector(state => state.user);
  const cart = useSelector(state => state.cart);

  const name = useInput();
  const lastname = useInput();
  const email = useInput();
  const city = useInput();
  const adress = useInput();

  let costoDeEnvio = 500;

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(!user.id) return alert("Solo falta registrarse para disfrutar de nuestros productos!")
    axios.post(`api/purchases/${user.id}`, {
      name: name.value,
      lastname: lastname.value,
      email: email.value, 
      shippingAdress: adress.value, 
      cart: cart,
      totalAmount: totalAmount})
      .then(res => res.data)
      .then(purchase => alert(purchase))
      .catch(err => console.error(err));
  } ;

  return (
    <>
      <div>
        <h2>YA CASI ES TUYO!</h2>
      </div>
      <div className="container-sm">
        <div className="row">
          <div className="col-sm-8">

            <form onSubmit={handlerSubmit} className="row g-3 needs-validation form a">
              <div className="col-md-4">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  {...name}
                  required={true}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  {...lastname}
                  required={true}
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustomUsername" className="form-label">
                  E-mail
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    {...email}
                    required={true}
                  />
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Ciudad
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  {...city}
                  required={true}
                />
                <div className="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  Dirección de envio
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  {...adress}
                  required={true}
                />
                <div className="invalid-feedback">Please provide a valid city.</div>
              </div>

              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Finalizar compra
                </button>
              </div>
            </form>
          </div>

          <div className="col-sm-4 d-flex align-content-center">
            <div className="card">
              <img
                className="card-img imgMauro"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHsRCZHppRPBg/profile-displayphoto-shrink_800_800/0/1567712683900?e=1660780800&v=beta&t=NPMfcdiGN8drejX_mAKfc8q9nWtuGbM6spmR1qyPy48"
                alt="..."
              />
              <div className="row card-body">
                <h5 className="card-title">Tu compra</h5>
                <hr />
                <div className="col-6 card-text card-checkout margin">
                  Subtotal : ${totalAmount}
                </div>
                <div className="col-6 card-text card-checkout margin">
                  Costo de envio : ${costoDeEnvio}
                </div>
                <div className="col-7 card-text card-checkout">
                  <h3>{`TOTAL : $${totalAmount + costoDeEnvio} `}</h3>
                </div>
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
