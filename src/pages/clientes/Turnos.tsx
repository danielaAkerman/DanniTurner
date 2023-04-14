import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Turnos() {
  return (
    <div>
      <h1>Turnos</h1>

      <button>
        <Link to={"/detalles-turno"}>Nuevo Turno</Link>
      </button>
      <button>
        <Link to={"/mis-turnos"}>Ver mis turnos</Link>
      </button>
    </div>
  );
}
