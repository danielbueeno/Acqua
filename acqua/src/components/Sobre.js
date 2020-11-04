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
                    <img src={kleciusFoto} alt="fotp do prof Kécius" className="klecius rounded" />

                    <p className="text-justify description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas temporibus, dolorem dolore deserunt reiciendis rerum earum quo atque distinctio pariatur laborum eligendi odit duci</p>


                    <h2 className="professor">Flávia Firmo</h2>
                    <img src={flaviaFoto} alt="foto do prof Kécius" className="flavia rounded" />


                    <p className="text-justify description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas temporibus, dolorem dolore deserunt reiciendis rerum earum quo atque distinctio pariatur laborum eligendi odit duci</p>

                </div>
            </div>

        </div>
    );
}

export default Sobre;