import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function NuevoUsuario() {
  function postNuevoUsuario(e) {
    e.preventDefault();
    // Lógica postear user
    console.log("Se crea user");
  }
  return (
    <div>
      <h1>Nuevo usuario</h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 400,
        }}
        onSubmit={postNuevoUsuario}
      >

        <label>
          <span>Email</span>
          <br />
          <input name="email" type="email" />
        </label>

        <label>
          <span>Apellido</span>
          <br />
          <input name="apellido" />
        </label>

        <label>
          <span>Nombre</span>
          <br />
          <input name="nombre" />
        </label>

        <label>
          <span>DNI</span>
          <br />
          <input name="dni" />
        </label>

        <label>
          <span>Nivel</span>
          <br />
          <input type="number" name="nivel" />
        </label>

        <label>
          <span>Estado</span>
          <br />
          <input name="estado" />
        </label>

        <br />
        <button className="btn btn-success">Crear Usuario</button>
      </form>
      <Link to={"/usuarios"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
