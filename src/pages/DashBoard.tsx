import React from "react";
import { Link } from "react-router-dom";

export function DashBoard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={"/clientes"}>
        <button>Reservas (At. al Cliente)</button>
      </Link>
      <br />
      <Link to={"/prestadores"}>
        <button>Gestión de agendas (Prestadores)</button>
      </Link>
      <br />
      <Link to={"/usuarios"}>
        <button>Gestión de usuarios (Que administran este sistema)</button>
      </Link>
    </div>
  );
}
