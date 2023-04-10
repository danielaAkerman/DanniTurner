import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

export function Turnos() {
  return (
    <div>
      <h1>Turnos</h1>
      <Link to={"/nuevo-turno"}>Nuevo Turno</Link>
      <Link to={"/mis-turnos"}>Ver mis turnos</Link>
    </div>
  );
}
