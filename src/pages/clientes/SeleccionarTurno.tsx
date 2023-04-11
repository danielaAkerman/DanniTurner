import React from "react";
import { Link } from "react-router-dom";

export function SeleccionarTurno() {
  return (
    <div>
      <h1>SeleccionarTurno</h1>
      <ul>
        <li>
          Día: Martes 11/04/2023 Horario: 16:00
          <Link to={"/confirmar-turno"}>
            <button>Selec</button>
          </Link>
        </li>
        <li>
          Día: Miércoles 12/04/2023 Horario: 16:00
          <Link to={"/confirmar-turno"}>
            <button>Selec</button>
          </Link>
        </li>
        <li>
          Día: Jueves 13/04/2023 Horario: 16:00
          <Link to={"/confirmar-turno"}>
            <button>Selec</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
