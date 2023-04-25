import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Propuestas() {
  return (
    <div>
      <h1>Propuestas</h1>
      <Link to={"/prestaciones"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
