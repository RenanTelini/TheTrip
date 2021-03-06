import React from "react";
import { Link } from "react-router-dom";
import Logo from "../views/img/logo.png";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" style={{height: "60px", marginRight: "30px"}}/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Clientes" className="nav-link text-dark ">
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contatos" className="nav-link text-dark">
                Contatos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Destinos" className="nav-link text-dark">
                Destinos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Promocoes" className="nav-link text-dark">
                Promoções
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
