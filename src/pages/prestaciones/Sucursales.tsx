import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Sucursales() {
  return (
    <div>
      <h1>Sucursales</h1>
      <Link to={"/prestaciones"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
