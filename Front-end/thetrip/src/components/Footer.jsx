import React from "react";
import Logo from "../views/img/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </footer>
  );
}