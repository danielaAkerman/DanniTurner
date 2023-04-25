import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function NuevaSucursal() {
  function generarNuevaSucursal(e) {
    e.preventDefault()
    // Lógica
    console.log("Generar sucursal");
  }
  return (
    <div>
      <h1>NuevaSucursal</h1>

      <form
        onSubmit={generarNuevaSucursal}
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
          <span>Domicilio</span>
          <br />
          <input name="domicilio" />
        </label>

        <label>
          <span>Representante</span>
          <br />
          <input name="representante" />
        </label>

        <label>
          <span>Teléfono</span>
          <br />
          <input name="telefono" />
        </label>

        <label>
          <span>Estado</span>
          <br />
          <input name="estado" />
        </label>

        <button className="btn btn-primary" type="submit">
          Guardar
        </button>

        <Link to={"/prestaciones/sucursales"}>
          <button className="btn btn-primary" type="button">
            Deshacer
          </button>
        </Link>
      </form>
    </div>
  );
}
