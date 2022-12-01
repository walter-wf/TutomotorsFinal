import React from "react";
import "./Taller.css";
import of1 from "./of1.jpg";
import of2 from "./of2.jpg";
import of3 from "./of3.jpg";
import of4 from "./of4.jpg";

const Eltaller = () => {
  return (
    <div className="contenedorTaller">
      <div className="contenedor-imagenes">
        <h1 className="Eltaller">EL TALLER</h1>
        <img classname="oficina-1"  src={of1} />
        <img classname="oficina-2"  src={of2} />
        <img classname="oficina-3"  src={of3} />
        <img classname="oficina-4"  src={of4} />
      </div>
    </div>
  );
};

export default Eltaller;
