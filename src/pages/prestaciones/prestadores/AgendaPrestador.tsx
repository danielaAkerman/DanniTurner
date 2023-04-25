import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function AgendaPrestador() {
  // const params=useParams()
  // const prestador= params.prestador
  // Lógica traer datos prestador
  return (
    <div>
      AGENDA PRESTADOR Nombre: Robledo
      <Link to={"/prestaciones/prestadores/ver-prestador/:1"}>
        <button className="btn btn-primary">Volver</button>
      </Link>

    </div>
  );
}
