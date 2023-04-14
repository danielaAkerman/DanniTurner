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

    document.querySelector(
      "#lista-clientes"
    ).innerHTML = `

    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Apellido</th>
      <th scope="col">Nombre</th>
      <th scope="col">DNI</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Akerman</td>
      <td>Daniela</td>
      <td>2342342</td>
      <td><button className="btn btn-primary" id="turno">IR</button></td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Akerman</td>
      <td>Lucía</td>
      <td>4534534</td>
      <td><button className="btn btn-primary" id="turno">IR</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Akerman</td>
      <td>Viviana</td>
      <td>45645645</td>
      <td><button className="btn btn-primary" id="turno">IR</button></td>
    </tr>
  </tbody>
</table>

   `;
    //  ${<Link to={"/turnos"}>"Seleccionar"</Link>}
    document.querySelector("#turno")?.addEventListener("click", () => {
      navigate("/cliente/Akerman", { replace: true });
      console.log("clikeado");
    });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Buscar Cliente</h1>

        <p>Sólo un campo es requerido</p>

        <form onSubmit={buscarClienteForm}>
          <div className="mb-3">
            <label className="form-label">
              <span>Apellido</span>
              <input
                type="text"
                name="apellido"
                className="form-control"
                aria-describedby=""
              />
            </label>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <span>DNI</span>
              <input
                type="text"
                name="dni"
                className="form-control"
                aria-describedby=""
              />
            </label>
          </div>
          <br />

          <button className="btn btn-primary">BUSCAR</button>
        </form>
      </div>
      <div id="lista-clientes"></div>
    </div>
  );
}
