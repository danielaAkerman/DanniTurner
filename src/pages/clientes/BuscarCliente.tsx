import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function BuscarCliente() {
  const navigate = useNavigate();

  function buscarClienteForm(e) {
    e.preventDefault();
    const apellidoCliente = e.target.apellido.value || "";
    const dniCliente = e.target.dni.value || "";
    console.log("CLIENTE: ", apellidoCliente, dniCliente);

    // LOGICA PARA BUSCAR UN CLIENTE

    // document.querySelector("#lista-clientes").innerHTML=`Akerman Daniela 27834872
    // ${
    //   <Link to={"/turnos"}>"Seleccionar"</Link>
    // }`

    navigate("/turnos", { replace: true });
  }

  return (
    <div>
      <h1>BuscarCliente</h1>
      <form onSubmit={buscarClienteForm}>
        <p>Sólo un campo es requerido</p>
        <label>
          <span>Apellido</span>
          <input type="text" name="apellido" />
        </label>
        <br />
        <br />
        <label>
          <span>DNI</span>
          <input type="text" name="dni" />
        </label>
        <br />

        <button>BUSCAR</button>
      </form>
      <div id="lista-clientes"></div>
    </div>
  );
}
