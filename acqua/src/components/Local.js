import React from 'react';
import "./Local.css";

import whatsapp from "../imgs/icons/whatsapp.png";
import instagram from "../imgs/icons/instagram.png";



function Local() {
    return (
        <div >
            <h1 className="titulo">LOCALIZAÇÃO E CONTATO</h1>
            <div className="div-master">

                <div id="mapid">

                </div>

                <div className="container contatos">
                    <div className="contato1">
                        <img src={whatsapp} alt="" className="wpp" />
                        <p className="number">(99) 98153-1215</p>
                    </div>
                    <div className="contato2">
                        <img src={instagram} alt="" className="inst" />
                        <p className="insta-page"><a href="" className="insta-link">@acquafirmoebueno</a></p>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Local;