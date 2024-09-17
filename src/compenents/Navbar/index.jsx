import React from "react";
import "./navbar.css";
import Mosquito from "../../assets/mosquito.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          HOME
        </Link>
        <Link to="/contato" style={{ textDecoration: "none", color: "white" }}>
          QUEM SOMOS
        </Link>
        <Link to="/denuncie" style={{ textDecoration: "none", color: "white" }}>
          DENUNCIE
        </Link>
      </ul>
      <img src={<Mosquito />} />
    </nav>
  );
}

export default Navbar;
