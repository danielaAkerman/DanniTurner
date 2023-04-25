import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Prestadores() {
  return (
    <div>
      <h1>Prestadores</h1>
      <Link to={"/prestaciones"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
