import React from 'react'
import "./Sobre.css";

import kleciusFoto from "../imgs/klecius.jpeg";
import flaviaFoto from "../imgs/Flavia.jpeg";

function Sobre() {
    return (
        <div>
            <h1 className="titulo">EQUIPE</h1>
            <div className="container">
                <div className="sobre container">
                    <h2 className="professor">Klécius Bueno</h2>
                    <div className="prof1">
                        <img src={kleciusFoto} alt="fotp do prof Kécius" className="klecius rounded" />
                        <p className="text-justify description legen1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas temporibus, dolorem dolore deserunt reiciendis rerum earum quo atque distinctio pariatur laborum eligendi odit duci</p>
                    </div>

                    <h2 className="professor">Flávia Firmo</h2>
                    <div className="prof2">
                        <p className="text-justify description legen2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas temporibus, dolorem dolore deserunt reiciendis rerum earum quo atque distinctio pariatur laborum eligendi odit duci</p>
                        <img src={flaviaFoto} alt="foto do prof Kécius" className="flavia rounded" />
                    </div>





                </div>
            </div>

        </div>
    );
}

export default Sobre;