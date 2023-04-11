import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function BuscarCliente() {
  const navigate = useNavigate();

  function buscarClienteForm(e) {
    e.preventDefault();
    const apellidoCliente = e.target.apellido.value || "";
    const dniCliente = e.target.dni.value || "";
    console.log("CLIENTE: ", apellidoCliente, dniCliente);

    navigate("/turnos", { replace: true });
  }

  return (
    <div>
      <h1>BuscarCliente</h1>
      <form onSubmit={buscarClienteForm}>
        <label>
          <span>Apellido</span>
          <input type="text" name="apellido" />
        </label>

        <label>
          <span>DNI</span>
          <input type="text" name="dni" />
        </label>

        <button>BUSCAR</button>
      </form>
    </div>
  );
}
