import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <img className="Logo">
            

        </img>
        <ul className="list">
          <li>
            <a href="WhatApp">WhatApp</a>
          </li>
          <li>
            <a href="Mail">Mail</a>
          </li>
          <li>
            <a href="Direccion">Direccion</a>
          </li>
          <li>
            <a href="Horarios">Horarios</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
