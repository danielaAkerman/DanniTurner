import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function EditarUsuario() {
  // Lógica para traer los datos del user
  function postEditarUsuario(e) {
    e.preventDefault();
    // Lógica actualizar user
    console.log("Se actualiza datos user");
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
        onSubmit={postEditarUsuario}
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
        <button className="btn btn-success">Guardar Cambios</button>
      </form>
      <Link to={"/usuarios"}>
        <button className="btn btn-primary">Descartar Cambios</button>
      </Link>
    </div>
  );
}
