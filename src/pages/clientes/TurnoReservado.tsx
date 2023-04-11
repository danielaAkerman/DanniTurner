import React from "react";
import { Link } from "react-router-dom";

export function TurnoReservado() {
  return (
    <div>
      <h1>TurnoReservado</h1>
      <p>DETALLES DEL TURNO:</p>
      <p>Día: 25/05/2023</p>
      <p>Hora: 16:30</p>
      <p>Propuesta: Obstetricia</p>
      <p>Prestador: Cesar Izquierdo</p>
      <p>Código:AABB11</p>
      <button>Descargar comprobante</button>
      <Link to={"/turnos"}>
        <button>Volver a Turnos</button>
      </Link>
      {/* Pop up exito */}
    </div>
  );
}
