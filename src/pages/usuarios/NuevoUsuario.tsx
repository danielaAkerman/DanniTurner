import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const url_db = "http://localhost:3001";

/*
    email,
    apellido,
    nombre,
    dni,
    nivel_permisos,
    negocio,
    fecha_nacimiento,
    estado_user_id,
     */

export function NuevoUsuario() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function submitted(formData) {
    // const userLogIn=await fetch (url_db+"/login")

    // const {
    //   email,
    //   apellido,
    //   nombre,
    //   dni,
    //   nivel_permisos,
    //   negocio,
    //   fecha_nacimiento,
    //   estado_user_id,
    // } = formData;

    fetch(url_db + "/auth", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        } else if (data) {
          console.log("Se hizo sign-in:", data);
        }
      });
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
        onSubmit={handleSubmit(submitted)}
      >
        <label>
          <span>Email</span>
          <br />
          <input type="email" {...register("email", { required: true })} />
        </label>

        <label>
          <span>Apellido</span>
          <br />
          <input {...register("apellido", { required: true })} />
        </label>

        <label>
          <span>Nombre</span>
          <br />
          <input {...register("nombre", { required: true })} />
        </label>

        <label>
          <span>DNI</span>
          <br />
          <input {...register("dni", { required: true })} />
        </label>

        <label>
          <span>Fecha de Nacimiento</span>
          <br />
          <input
            {...register("fecha_nacimiento", { required: true })}
            type="date"
          />
        </label>

        <label>
          <span>Nivel de Permisos</span>
          <br />
          <input
            {...register("nivel_permisos", { required: true })}
            type="number"
          />
        </label>

        <label>
          <span>Estado</span>
          <br />
          <input {...register("estado_user_id", { required: true })} />
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
