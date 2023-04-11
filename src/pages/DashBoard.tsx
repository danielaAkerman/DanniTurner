import React from "react";
import { Link } from "react-router-dom";

export function DashBoard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to={"/clientes"}>
        <button>Clientes</button>
      </Link>
      <br />
      <Link to={"/prestadores"}>
        <button>Prestaciones</button>
      </Link>
      <br />
      <Link to={"/usuarios"}>
        <button>Usuarios de sistema</button>
      </Link>
    </div>
  );
}
