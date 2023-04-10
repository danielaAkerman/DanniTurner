import React from "react";

export function DTloginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;
    console.log(userName, password);
    // Validar datos, Routeo a Dashboard
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Usuario</label>
      <input type="text" name="username" />
      <label>Contraseña</label>
      <input type="password" name="password" />

      <button>Aceptar</button>
    </form>
  );
}
