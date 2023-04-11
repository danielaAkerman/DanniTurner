import React from "react";
import { Link } from "react-router-dom";

export function ConfirmarTurno() {
  function confirmarSeleccion() {
    console.log("Reserva confirmada, POP UP EXITO");
  }

  function cancelarSeleccion() {
    console.log("Borra el state de los detalles del turno");
  }

  return (
    <div>
      <h1>ConfirmarTurno</h1>
      <p>DETALLES DEL TURNO:</p>
      <p>Día: 25/05/2023</p>
      <p>Hora: 16:30</p>
      <p>Propuesta: Obstetricia</p>
      <p>Prestador: Cesar Izquierdo</p>
      <button onClick={confirmarSeleccion}>Confirmar Reserva</button>
      <Link to={"/turnos"}>
        <button onClick={cancelarSeleccion}>Cancelar y volver a Turnos</button>
      </Link>
      {/* Pop up exito */}
    </div>
  );
}
