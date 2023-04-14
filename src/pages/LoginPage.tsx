import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>Login</h1>

      <form>
        <div className="mb-3">
          <label className="form-label">
            <span>Usuario</span>

            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            ></input>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Contraseña</span>

            <input type="password" className="form-control"></input>
          </label>
        </div>

        <Link to={"dashboard"}>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </Link>
      </form>
    </div>
  );
}
