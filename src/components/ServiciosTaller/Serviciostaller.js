import React from "react";
import "./Serviciostaller.css";
import electronica from "./electronica.png";
import mecanica from "./mecanica.png";
import inyeccion from "./inyeccion.png";
import suspension from "./suspension.png";
import climatizacion from "./climatizacion.png";
import accesorios from "./accesorios.png";

const ServiciosTaller = () => {
  return (
    <>
      <div className="electronica"> <img className="imagen-electronica" src= {electronica} />
      ELECTRÓNICA
          <ul>
            <li>Diagnostico de sistemas</li>
            <li>Electricidad</li>
            <li>Baterias</li>
          </ul>
        
      </div>
      <div className="mecanica"> <img className="imagen-mecanica" src= {mecanica} />
        MECANICA
        <ul>
          <li>Mecanica Ligera</li>
          <li>Filtros y Correas</li>
          <li>Cambios de Aceite</li>
        </ul>
      </div>
      <div className="inyeccion"> <img className="imagen-inyeccion" src= {inyeccion} />
        INYECCION
        <ul>
          <li>Inyeccion de Gasolina</li>
          <li>Inyeccion de Diesel</li>
          <li>Limpieza de Inyectores</li>
        </ul>
      </div>
      <div className="suspension"> <img className="imagen-suspension" src= {suspension} />
        COLISION
        <ul>
          <li>Reparacion de Colisiones</li>
          <li>Reparacion de Colisiones</li>
          <li>Reparacion de Colisiones</li>
        </ul>
      </div>
      <div className="AC"> <img  className="imagen-ac" src={climatizacion} />
        AIRE ACONDICIONADO
        <ul>
          <li>Reemplazo Filtros</li>
          <li>Carga Gas</li>
          <li>Reparacion de AC</li>
        </ul>
      </div>
      <div className="limpieza"> <img className="imagen-limpieza" src={accesorios} />
        LIMPIEZA
        <ul>
          <li>Limpieza de interiores</li>
          <li>Desmantelamiento limpieza profunda</li>
          <li>Limpieza de Chasis</li>
        </ul>
      </div>
    </>
  );
};

export default ServiciosTaller;
