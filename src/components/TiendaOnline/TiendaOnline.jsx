import React from "react";
import "./TiendaOnline.css";

const  TiendaOnline = () => {
  return (
    <div className="TiendaOnline">
      <img className="repuestos" src="./images/repuestos.jpg" 
      alt="repuestos"
      />
      <div className="Visita-nuestra-tienda">
        <h1>Visita Nuestra tienda</h1>
        <p className="Testimonio">
          Contamos con variedad de repuestos para satisfacer todos los
          requerimientos del carro.
        </p>
      </div>
    </div>
  );
};

export default TiendaOnline;
