import React from "react";
import { Link } from "react-router-dom";

export function SeleccionarProfesional() {
  return (
    <div>
      <h1>SeleccionarProfesional</h1>
      <ul>
        <Link to={"/seleccionar-fecha"}>
          <li>
            Profesional 1<button>Seleccionar</button>
          </li>
        </Link>
        <Link to={"/seleccionar-fecha"}>
          <li>
            Profesional 2<button>Seleccionar</button>
          </li>
        </Link>
        <Link to={"/seleccionar-fecha"}>
          <li>
            Profesional 3<button>Seleccionar</button>
          </li>
        </Link>
      </ul>
    </div>
  );
}
