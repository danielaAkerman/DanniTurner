import React from "react";
import { useNavigate } from "react-router-dom";

export function MisTurnos() {
  const navigate = useNavigate();
  function irAModificarTurno(e) {
    // obtener el id del turno
    navigate("/nuevo-turno", { replace: true });
  }

  return (
    <div>
      <h1>MisTurnos</h1>
      <ul>
        <li>
          Día: Martes 11/04/2023 Horario: 16:00
          <div>
            <button>Descargar Comprobante</button>

            <button onClick={irAModificarTurno}>Modificar Turno</button>

            <button>Cancelar Turno</button>
          </div>
        </li>
        <li>
          Día: Martes 11/04/2023 Horario: 16:00
          <div>
            <button>Descargar Comprobante</button>
            <button>Modificar Turno</button>
            <button>Cancelar Turno</button>
          </div>
        </li>
        <li>
          Día: Martes 11/04/2023 Horario: 16:00
          <div>
            <button>Descargar Comprobante</button>
            <button>Modificar Turno</button>
            <button>Cancelar Turno</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
