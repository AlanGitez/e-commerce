import React from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const setTotalAmount1 = useSelector((state) => state.totalAmount);
  let costoDeEnvio = 500;
  return (
    <>
      <div>
        <h2>YA CASI ES TUYO!</h2>
      </div>
      <div className="container-sm">
        <div className="row">
          <div className="col-sm-8">
            <form class="row g-3 needs-validation form a" novalidate>
              <div class="col-md-4">
                <label class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  require
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustom02" class="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  require
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">
                  E-mail
                </label>
                <div class="input-group has-validation">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    require
                  />
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  Ciudad
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  require
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-6">
                <label for="validationCustom03" class="form-label">
                  Dirección de envio
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  require
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>

              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Finalizar compra
                </button>
              </div>
            </form>
          </div>

          <div className="col-sm-4 d-flex align-content-center">
            <div class="card">
              <img
                class="card-img imgMauro"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHsRCZHppRPBg/profile-displayphoto-shrink_800_800/0/1567712683900?e=1660780800&v=beta&t=NPMfcdiGN8drejX_mAKfc8q9nWtuGbM6spmR1qyPy48"
                alt="..."
              />
              <div class="row card-body">
                <h5 class="card-title">Tu compra</h5>
                <hr />
                <div class="col-6 card-text card-checkout margin">
                  Costo de envio : ${costoDeEnvio}
                </div>
                <div class="col-7 card-text card-checkout">
                  <h3>{`TOTAL : $${setTotalAmount1 + costoDeEnvio} `}</h3>
                </div>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
