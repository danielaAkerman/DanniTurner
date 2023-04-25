import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function VerPrestador() {
  // const params=useParams()
  // const prestador= params.prestador
  // Lógica traer datos prestador
  return (
    <div>
      VER PRESTADOR Nombre: Robledo
      <Link to={"/prestaciones/prestadores/ver-prestador/datos/:1"}>
        <button className="btn btn-primary">Datos</button>
      </Link>
      <Link to={"/prestaciones/prestadores/ver-prestador/agenda/:1"}>
        <button className="btn btn-primary">Ver Agenda</button>
      </Link>
      <Link to={"/prestaciones/prestadores"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
