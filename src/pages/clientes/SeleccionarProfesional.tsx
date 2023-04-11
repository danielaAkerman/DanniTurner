import React from "react";
import { Link } from "react-router-dom";

export function SeleccionarProfesional() {
  return (
    <div>
      <h1>SeleccionarProfesional</h1>
      <ul>
        <li>
          Profesional 1
          <Link to={"/seleccionar-turno"}>
            <button>Seleccionar</button>
          </Link>
        </li>
        <li>
          Profesional 2
          <Link to={"/seleccionar-turno"}>
            <button>Seleccionar</button>
          </Link>
        </li>
        <li>
          Profesional 3
          <Link to={"/seleccionar-turno"}>
            <button>Seleccionar</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
