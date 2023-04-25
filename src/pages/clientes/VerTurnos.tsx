import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function VerTurnos() {
  // Lógica para traer los turnos de ese cliente
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Especialidad</th>
            <th scope="col">Prestador</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            {/* Solo para turnos vigentes */}
            <th scope="col">Modificar</th>
            <th scope="col">Cancelar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cardio</td>
            <td>Robledo</td>
            <td>14/06/2023</td>
            <td>16:30hs</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
      <Link to={"/cliente/Akerman"}>
        <button className="btn btn-primary">VOLVER</button>
      </Link>
    </div>
  );
}
