import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function GenerarTurnos() {
  return (
    <div>
      <h1>GenerarTurnos</h1>
      <Link to={"/prestaciones"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
