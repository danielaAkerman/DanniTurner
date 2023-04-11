import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function ConfirmarTurno() {
  const navigate = useNavigate();
  function confirmarSeleccion() {
    // LOGICA PARA RESERVAR EL TURNO DEFINITIVAMENTE

    navigate("/turno-reservado", { replace: true });
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
      <p>Si se tratara de una MODIFICACIÓN:</p>
      <p>Recuerde que, con esta confirmación, el turno ksjdnfsdjf quedará sin efecto</p>
      <button onClick={confirmarSeleccion}>Confirmar Turno</button>
      <Link to={"/turnos"}>
        <button onClick={cancelarSeleccion}>Deshacer y volver a Turnos</button>
      </Link>
      {/* Pop up exito */}
    </div>
  );
}
