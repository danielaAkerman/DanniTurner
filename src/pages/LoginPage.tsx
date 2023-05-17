import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitted(data) {
    console.log("DATOS:", data);
    console.log("ERRORES", errors);
    console.log("Lógica validar si el usuario existe");
    // Lógica validar si el usuario existe
    navigate("/dashboard", { replace: true });
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Login</h1>

      <form onSubmit={handleSubmit(submitted)}>
        <div className="mb-3">
          <label className="form-label">
            <span>Usuario</span>
            <input
              className="form-control"
              {...register("usuario", { required: true })}
            />
            {errors.usuario && <span>El usuario es requerido</span>}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            <span>Contraseña</span>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && <span>La contraseña es requerida</span>}
          </label>
        </div>

        {/* <Link to={"dashboard"}> */}
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}
