import React from "react";
import "./Navbar.css";
import logo from "../imgs/logo.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav items">
          <li class="nav-item">
            <a class="nav-link" href="#">Atividades <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Equipe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Localização e Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
