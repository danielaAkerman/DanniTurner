import React from "react";
import { Link } from "react-router-dom";

export function NuevoTurno() {
  return (
    <div>
      <h1>NuevoTurno</h1>
      <ul>
        <Link to={"/seleccionar-profesional"}>
          <li>
            Propuesta 1<button>Cosa</button>
            <button>Otra cosa</button>
          </li>
        </Link>
        <Link to={"/seleccionar-profesional"}>
          <li>
            Propuesta 2<button>Cosa</button>
            <button>Otra cosa</button>
          </li>
        </Link>
        <Link to={"/seleccionar-profesional"}>
          <li>
            Propuesta 3<button>Cosa</button>
            <button>Otra cosa</button>
          </li>
        </Link>
      </ul>
    </div>
  );
}
