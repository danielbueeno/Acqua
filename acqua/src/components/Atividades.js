import React from "react";
import "./Atividades.css";

import natacao from "../imgs/natacao.jpeg";
import crianca from "../imgs/criancas.jpeg";



function Atividades() {
  return (
    <div>
      <h1 className="titulo">ATIVIDADES</h1>
      <div className="container carousels">

        {/*First carousel */}
        <div className="container first">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="d-block w-100 "><img src={crianca} class="d-block w-100" alt="..." className="atv-imgs" /></div>
              </div>
              <div class="carousel-item">
                <img src={natacao} class="d-block w-100" alt="..." className="atv-imgs" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div className="atv-container">
            <h2 className="atv">Natação Infantil</h2>
          </div>

        </div>

        {/*Second carousel */}
        <div className="container first second">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="d-block w-100 "><img src={natacao} class="d-block w-100" alt="..." className="atv-imgs" /></div>
              </div>
              <div class="carousel-item">
                <img src={natacao} class="d-block w-100" alt="..." className="atv-imgs" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div className="atv-container">
            <h2 className="atv">Hidroginástica</h2>
          </div>
        </div>
        {/*Second carousel */}
        <div className="container second">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="d-block w-100 "><img src={natacao} class="d-block w-100" alt="..." className="atv-imgs" /></div>
              </div>
              <div class="carousel-item">
                <img src={natacao} class="d-block w-100" alt="..." className="atv-imgs" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div className="atv-container">
            <h2 className="atv">Funcional Kids</h2>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Atividades;
