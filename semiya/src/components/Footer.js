import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar">
        {" "}
        {/* className="navbar navbar-light bg-light" */}
        <div className="container-fluid">
          {" "}
          {/* className="navbar navbar-light bg-light" */}
          <Link to="/" className="navbar-brand footer-a-p" href="#">
            SemiYa
          </Link>
          <Link to="/" className="navbar-brand footer-a-p" href="#">
            Franquicias
          </Link>
          <Link to="/" className="navbar-brand  footer-a-p" href="#">
            Sucursales
          </Link>
          <p className=" footer-a-p">
            <strong>Envios:</strong> Hacemos envios a todo CABA, entre las 10am
            y las 18hrs.
          </p>
          <Link to="/contact" className="navbar-brand  footer-a-p" href="#">
            Contacto
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Footer;

// Al lado:
// Contacto
// Direccion
// Telefono
// mail
