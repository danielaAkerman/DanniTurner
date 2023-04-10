import React from "react";
import { Link } from "react-router-dom";

export function SeleccionarFecha() {
  return (
    <div>
      <h1>CALENDARIO</h1>
      <Link to={"/seleccionar-turno"}>
        <button>Seleccionar Turnos</button>
      </Link>
    </div>
  );
}
