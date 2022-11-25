import React from "react";
import "./TiendaOnline.css";
import repuestos1 from "./repuestos1.jpeg";


const TiendaOnline = () => {
  return (
    <div className="TiendaOnline">
      <img className="imagen" src={repuestos1}  />
      <div className="Visita-nuestra-tienda">
        <h1>Visita Nuestra tienda</h1>
        <p className="Testimonio">
          Contamos con variedad de repuestos para satisfacer todos los
          requerimientos del carro.
          <div className="compraonline">COMPRA ONLINE</div>
        </p>
      </div>
    </div>
  );
};

export default TiendaOnline;
