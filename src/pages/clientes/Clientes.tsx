import React from "react";
import { Link} from "react-router-dom";

export function Clientes() {
  return (
    <div>
      <h1>Clientes</h1>
      <Link to={"/buscar-cliente"}>
        <button>Buscar Cliente</button>
      </Link>
      <Link to={"/nuevo-cliente"}>
        <button>Nuevo Cliente</button>
      </Link>
    </div>
  );
}
