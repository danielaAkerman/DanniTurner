import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Prestaciones() {
 

  return (<div style={{display:"flex", flexDirection:"column", gap:10}}>
    <Link to={"sucursales"}>
    <button className="btn btn-primary">Sucursales</button>
    </Link>
    
    <Link to={"propuestas"}>
    <button className="btn btn-primary">Propuestas</button>
    </Link>

    <Link to={"prestadores"}>
    <button className="btn btn-primary">Prestadores</button>
    </Link>

    <Link to={"generar-turnos"}>
    <button className="btn btn-primary">Generar Turnos</button>
    </Link>


  </div>
  );
}
