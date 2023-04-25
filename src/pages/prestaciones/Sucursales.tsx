import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Sucursales() {
  return (
    <div>
      <h1>Sucursales</h1>
      <Link to={"nueva-sucursal"}>
      <button className="btn btn-success">Nueva Sucursal</button>
      </Link>
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Domicilio</th>
            <th scope="col">Representante</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cerro</td>
            <td>Rafael Nuñez</td>
            <td>Ana</td>
            <td>3515838383</td>
            <td>Activo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Centro</td>
            <td>Colón</td>
            <td>Maria</td>
            <td>3515343434</td>
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
