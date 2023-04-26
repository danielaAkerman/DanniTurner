import React from "react";
import { Link } from "react-router-dom";

export function DashBoard() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>

      <div className="container text-center">
        <div className="row align-items-start">
          {/* <button>Atención al Cliente</button> */}
          <div className="card text-center mb-3">
            <div className="card-body">
              <h5 className="card-title">Atención al Cliente</h5>
              <p className="card-text">
                Nuevos turnos, modificaciones y cancelaciones. Datos de clientes
              </p>
              <div
                className="text-center"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to={"/buscar-cliente"}>
                  <button className="btn btn-success">Buscar Cliente</button>
                </Link>
                <Link to={"/nuevo-cliente"}>
                  <button className="btn btn-success">Nuevo Cliente</button>
                </Link>
              </div>
            </div>
          </div>

          <Link to={"/prestaciones"}>
            <div className="card text-center mb-3">
              <div className="card-body">
                <h5 className="card-title">Administración de Prestaciones</h5>
                <p className="card-text">
                  Administración de propuestas, agendas y personas.
                </p>
              </div>
            </div>
          </Link>

          <Link to={"/usuarios"}>
            <div className="card text-center mb-3">
              <div className="card-body">
                <h5 className="card-title">Usuarios de sistema</h5>
                <p className="card-text">
                  Administración de datos y permisos de usuarios.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
