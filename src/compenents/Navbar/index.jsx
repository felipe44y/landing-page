import React from "react";
import "./navbar.css";
import Mosquito from "../../assets/mosquito.png";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white", fontSize: "1.5rem" }}
        >
          HOME
        </Link>
        <span style={{ fontSize: "2rem" }}>|</span>
        <Link
          to="/contato"
          style={{ textDecoration: "none", color: "white", fontSize: "1.5rem" }}
        >
          QUEM SOMOS
        </Link>
        <span style={{ fontSize: "2rem" }}>|</span>
        <Link
          to="/denuncie"
          style={{ textDecoration: "none", color: "white", fontSize: "1.5rem" }}
        >
          DENUNCIE
        </Link>
      </ul>
      <img width={60} height={60} src={Mosquito} />
    </nav>
  );
}

export default Navbar;
