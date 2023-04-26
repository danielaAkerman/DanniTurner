import React from "react";
import { Link } from "react-router-dom";



export function NuevoCliente() {
  function postNuevoCliente(e) {
    e.preventDefault();
    // LOGICA CREAR CLIENTE
    console.log("Crear nuevo cliente");
  }
  return (
    <div>
      NUEVO CLIENTE
      <form
        style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth:400 }}
        onSubmit={postNuevoCliente}
      >
        <h2>Datos personales</h2>
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
          <span>Fecha de Nacimiento</span>
          <br />
          <input name="nacimiento" />
        </label>

        <h2>Datos de contacto</h2>

        <label>
          <span>Teléfono</span>
          <br />
          <input name="telefono" />
        </label>

        <label>
          <span>Teléfono alternativo</span>
          <br />
          <input name="telefono-alternativo" />
        </label>

        <label>
          <span>Email</span>
          <br />
          <input name="email" type="email" />
        </label>

        <label>
          <span>Domicilio</span>
          <br />
          <input name="domicilio" />
        </label>

        <label>
          <span>Obra Social</span>
          <br />
          <input name="obra-social" />
        </label>

        <br />
        <button className="btn btn-success">Crear Registro</button>
      </form>
      <div>
        <Link to={"/buscar-cliente"}>
          <button className="btn btn-primary">Volver</button>
        </Link>
      </div>
    </div>
  );
}
