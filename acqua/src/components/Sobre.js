import React from 'react'
import "./Sobre.css";

function Sobre() {
    return (
        <div>
            <h1 className="titulo">EQUIPE</h1>

            <div className="container sobre">
                <h2 className="professor">Klécius Bueno</h2>
                <div className="foto"></div>

                <p className="text-justify description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas temporibus, dolorem dolore deserunt reiciendis rerum earum quo atque distinctio pariatur laborum eligendi odit duci</p>


                <h2 className="professor">Mulher</h2>
                <div className="foto"></div>

                <p className="text-justify description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptas temporibus, dolorem dolore deserunt reiciendis rerum earum quo atque distinctio pariatur laborum eligendi odit duci</p>

            </div>
        </div>
    );
}

export default Sobre;