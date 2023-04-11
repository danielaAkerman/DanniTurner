import React from "react";
import { Link } from "react-router-dom";

export function SeleccionarTurno() {
  return (
    <div>
      <h1>SeleccionarTurno</h1>
      <ul>
        <li>
          turno 1
          <Link to={"/confirmar-turno"}>
            <button>Selec</button>
          </Link>
        </li>
        <li>
          turno 2
          <Link to={"/confirmar-turno"}>
            <button>Selec</button>
          </Link>
        </li>
        <li>
          turno 3
          <Link to={"/confirmar-turno"}>
            <button>Selec</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
