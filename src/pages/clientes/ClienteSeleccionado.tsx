import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function ClienteSeleccionado() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cliente Akerman</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Link to={"/detalles-turno"}>
          <button className="btn btn-primary">NUEVO TURNO</button>
        </Link>
        <Link to={"/ver-turnos"}>
          <button className="btn btn-primary">VER TURNOS</button>
        </Link>
        <Link to={"/datos-cliente"}>
          <button className="btn btn-primary">DATOS PERSONALES</button>
        </Link>
        <Link to={"/dashboard"}>
          <button className="btn btn-primary">FINALIZAR</button>
        </Link>
      </div>
      <div id="lista-clientes"></div>
    </div>
  );
}
