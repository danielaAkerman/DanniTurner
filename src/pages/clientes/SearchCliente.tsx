import React from "react";
import { Link } from "react-router-dom";

export function SearchCliente() {
  return (
    <div>
      <h1>SearchCliente</h1>
      <Link to={"/turnos"}>
        <button>Ver turnos</button>
      </Link>
    </div>
  );
}
