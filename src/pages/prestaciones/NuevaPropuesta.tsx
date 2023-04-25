import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function NuevaPropuesta() {
  const navigate = useNavigate();
  function generarNuevaPropuesta(e) {
    e.preventDefault();
    // Lógica
    console.log("Generar propuesta");
    navigate("/prestaciones/propuestas", { replace: true });
  }
  return (
    <div>
      <h1>NuevaPropuesta</h1>

      <form
        onSubmit={generarNuevaPropuesta}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 400,
        }}
      >
        <label>
          <span>Nombre</span>
          <br />
          <input name="nombre" />
        </label>

        <label>
          <span>Sucursal</span>
          <br />
          <input name="sucursal" />
        </label>

        <label>
          <span>Estado</span>
          <br />
          <input name="estado" />
        </label>

        <button className="btn btn-primary" type="submit">
          Guardar
        </button>

        <Link to={"/prestaciones/propuestas"}>
          <button className="btn btn-primary" type="button">
            Deshacer
          </button>
        </Link>
      </form>
    </div>
  );
}
