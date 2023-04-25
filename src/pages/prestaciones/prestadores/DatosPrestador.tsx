import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function DatosPrestador() {
  // const params=useParams()
  // const prestador= params.prestador
  // Lógica traer datos prestador
  return (
    <div>
      Datos PRESTADOR
      <form>
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

          <h2>Información profesional</h2>

          <label>
            <span>Especialidad</span>
            <br />
            <input name="especialidad" />
          </label>

          <label>
            <span>Número de matrícula</span>
            <br />
            <input name="matricula" />
          </label>

          <label>
            <span>Sucursal</span>
            <br />
            <input name="sucursal" />
          </label>

          <label>
            <span>Horarios</span>
            <br />
            <input name="horarios" />
          </label>

          <br />
        </fieldset>
      </form>
      <div>
        <button className="btn btn-success">EDITAR</button>

        <Link to={"/prestaciones/prestadores/ver-prestador/:prestador"}>
          <button className="btn btn-primary">Volver</button>
        </Link>
      </div>
    </div>
  );
}
