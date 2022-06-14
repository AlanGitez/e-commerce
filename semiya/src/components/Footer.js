import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
    <Link to="/" className="navbar-brand" href="#">SemiYa</Link>
    <Link to="/" className="navbar-brand" href="#">Franquicias</Link>
    <Link to="/" className="navbar-brand" href="#">Sucursales</Link>
    <p><strong>Envios:</strong> Hacemos envios a todo CABA, entre las 10am y las 18hrs.</p>
    <Link to="/contact" className="navbar-brand" href="#">Contacto</Link>
    </div>
  </nav>
  )
}

export default Footer





// Al lado:
// Contacto
// Direccion
// Telefono
// mail