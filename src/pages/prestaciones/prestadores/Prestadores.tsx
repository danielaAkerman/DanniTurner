import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Prestadores() {
  const navigate = useNavigate();

  function verPrestador() {
    navigate("/prestaciones/prestadores/ver-prestador/:1", { replace: true });
  }
  return (
    <div>
      <h1>Prestadores</h1>

      <Link to={"/prestaciones/prestadores/nuevo-prestador"}>
        <button className="btn btn-success">Nuevo Prestador</button>
      </Link>

      

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Apellido</th>
            <th scope="col">Nombre</th>
            <th scope="col">Dni</th>
            <th scope="col">Estado</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Robledo</td>
            <td>José</td>
            <td>14997327</td>
            <td>Activo</td>
            <td onClick={verPrestador}>x</td>
          </tr>
        </tbody>
      </table>

      <Link to={"/prestaciones"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
