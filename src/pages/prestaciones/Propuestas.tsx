import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Propuestas() {
  return (
    <div>
      <h1>Propuestas</h1>
      <Link to={"/prestaciones/propuestas/nueva-propuesta"}>
      <button className="btn btn-success">Nueva Propuesta</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Propuesta</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cardiología</td>
            <td>Activo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Neumonología</td>
            <td>Activo</td>
          </tr>
        </tbody>
      </table>

      <Link to={"/prestaciones"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
