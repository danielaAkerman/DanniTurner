import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function ClienteSeleccionado() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cliente Akerman</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"center",
          gap: 10
        }}
      >
        <Link to={"/detalles-turno"}>
          <button className="btn btn-primary">NUEVO TURNO</button>
        </Link>
        <button className="btn btn-primary">VER TURNOS</button>
        <button className="btn btn-primary">DATOS PERSONALES</button>
      </div>
      <div id="lista-clientes"></div>
    </div>
  );
}
