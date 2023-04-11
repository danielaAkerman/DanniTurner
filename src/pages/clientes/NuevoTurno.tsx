import React from "react";
import { Link } from "react-router-dom";

export function NuevoTurno() {
  return (
    <div>
      <h1>NuevoTurno</h1>
      <ul>
        <li>
          Propuesta 1
          <Link to={"/seleccionar-profesional"}>
            <button>Cosa</button>
          </Link>
          <Link to={"/seleccionar-profesional"}>
            <button>Otra cosa</button>
          </Link>
        </li>
        
        <li>
          Propuesta 2
          <Link to={"/seleccionar-profesional"}>
            <button>Cosa</button>
          </Link>
          <Link to={"/seleccionar-profesional"}>
            <button>Otra cosa</button>
          </Link>
        </li>
        
        <li>
          Propuesta 3
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
