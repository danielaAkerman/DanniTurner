import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function DatosCliente() {
  // const params = useParams();
  // const cliente = params.client;

  // Lógica para traer los datos de ese cliente

  function actualizarDatos(e){
    e.preventDefault()
    // Lógica para actualizar datos
    console.log("Se actualiza info")
  }
  return (
    <div>
      <h1>DATOS CLIENTE</h1>
      <form onSubmit={actualizarDatos}>
        <fieldset
          disabled
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
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
        </fieldset>
        <br />
        {/* Agregar un boton de submit que solo se vea cuando está editable */}
      </form>
      <div>
        <button className="btn btn-success">EDITAR</button>
        <Link to={"/cliente/Akerman"}>
          <button className="btn btn-primary">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
