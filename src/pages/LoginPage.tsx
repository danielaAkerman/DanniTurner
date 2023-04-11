import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <label>
        <span>Usuario:</span>
        <input type="text" />
      </label>
      <br />
      <label>
        <span>Constraseña:</span>
        <input type="password" />
      </label>
      <br />
      <Link to={"dashboard"}>
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
