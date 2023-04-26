import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Usuarios() {
  return (
    <div>
      <h1>Gestión de usuarios</h1>
      <Link to={"/nuevo-usuario"}>
        <button className="btn btn-success">Registrar Nuevo Usuario</button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Apellido</th>
            <th scope="col">Nombre</th>
            <th scope="col">DNI</th>
            <th scope="col">Nivel</th>
            <th scope="col">Estado</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>dakerman@verticall.com.ar</td>
            <td>Akerman</td>
            <td>Daniela</td>
            <td>35666633</td>
            <td>3</td>
            <td>Activo</td>
            <td>
              <Link to={"/editar-usuario"}>x</Link>
            </td>
          </tr>
        </tbody>
      </table>

      <Link to={"/dashboard"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
