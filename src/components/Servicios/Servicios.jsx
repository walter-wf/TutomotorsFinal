import React from "react"
import "./Servicios.css"
import servicios from "./servicios.jpg";

const  Servicios = () => {
    return (
        <div className="Servicios-en-el-taller">
            <img className="servicios" src={servicios} />
            <h1 className="servicios1">SERVICIOS EN EL TALLER</h1>
            <p className="descripcion">Trabajamos con profesionales brindando garantia y seriedad. Nos avalan 10 años de experiencia</p>
            
        

        </div>
        

    );
}

export default Servicios;