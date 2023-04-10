import React from "react";
import { Link } from "react-router-dom";

export function SeleccionarTurno() {
  return (
    <div>
      <h1>SeleccionarTurno</h1>
      <ul>
        <Link to={"/confirmar-turno"}>
          <li>
            turno 1<button>Selec</button>
          </li>
        </Link>
        <Link to={"/confirmar-turno"}>
          <li>
            turno 2<button>Selec</button>
          </li>
        </Link>
        <Link to={"/confirmar-turno"}>
          <li>
            turno 3<button>Selec</button>
          </li>
        </Link>
      </ul>
    </div>
  );
}
