import React from "react";
import { Link } from "react-router-dom";

export function SeleccionarProfesional() {
  return (
    <div>
      <h1>SeleccionarProfesional</h1>
      <ul>
        <li>
          Lopez, María Eugenia
          <Link to={"/seleccionar-turno"}>
            <button>Seleccionar</button>
          </Link>
        </li>
        <li>
          Martinez, Laura
          <Link to={"/seleccionar-turno"}>
            <button>Seleccionar</button>
          </Link>
        </li>
        <li>
          Zamboni, Macarena
          <Link to={"/seleccionar-turno"}>
            <button>Seleccionar</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
