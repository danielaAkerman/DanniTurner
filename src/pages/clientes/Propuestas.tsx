import React from "react";
import { Link } from "react-router-dom";

export function Propuestas() {
  return (
    <div>
      <h1>Seleccione la propuesta</h1>
      <ul>
        <li>
          Cardiología
          <Link to={"/seleccionar-profesional"}>
            <button>Cosa</button>
          </Link>
          <Link to={"/seleccionar-profesional"}>
            <button>Otra cosa</button>
          </Link>
        </li>
        
        <li>
          Pedagogía
          <Link to={"/seleccionar-profesional"}>
            <button>Cosa</button>
          </Link>
          <Link to={"/seleccionar-profesional"}>
            <button>Otra cosa</button>
          </Link>
        </li>
        
        <li>
          Ginecología
          <Link to={"/seleccionar-profesional"}>
            <button>Cosa</button>
          </Link>
          <Link to={"/seleccionar-profesional"}>
            <button>Otra cosa</button>
          </Link>
        </li>
        
      </ul>
    </div>
  );
}
