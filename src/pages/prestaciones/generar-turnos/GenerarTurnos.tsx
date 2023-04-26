import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function GenerarTurnos() {
  function submittedDiasSemana(e) {
    e.preventDefault();
    console.log("submited days week");
  }
  function submittedDuracion(e) {
    e.preventDefault();
    console.log("submited duracion");
  }
  function aceptarSeleccion() {
    const tablaContainer = document.querySelector(".turnos-provisorios")!;
    tablaContainer.innerHTML = `
    <h3>Los turnos que van a generarse son:</h3>


    <table className="table">
  <thead>
    <tr>
      <th scope="col">Propuesta</th>
      <th scope="col">Prestador</th>
      <th scope="col">Fecha</th>
      <th scope="col">Hora</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Obstetricia</td>
      <td>Izquierdo César</td>
      <td>14/06/2023</td>
      <td>16:00 hs</td>
      <td>x</td>
    </tr>
    
  </tbody>
</table>

<button className="btn btn-primary">Aceptar y generar estos turnos</button>
<button className="btn btn-outline-primary">Deshacer la operación</button>
    `;
  }
  return (
    <div>
      <h1>GenerarTurnos</h1>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Seleccionar Especialidad (Propuesta, Actividad, Recorrido...)
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Pediatría</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Obstetricia</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Ginecología</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label">Laboratorio</label>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Seleccionar Médico (Profesional, Guía, Prestador...)
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Lopez, Mario</li>
                <li>Juarez, Analía</li>
                <li>Robledo, José</li>
                <li>Martinez, Sabrina</li>
                <li>Llanos, Laura</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Establecer plazo
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <form>
                <label>
                  <span>Desde:</span>
                  <input type="date" name="desde" />
                </label>

                <label>
                  <span>Hasta:</span>
                  <input type="date" name="hasta" />
                </label>
              </form>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Seleccionar días de la semana
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <form onSubmit={submittedDiasSemana}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Dom</th>
                      <th scope="col">Lun</th>
                      <th scope="col">Mar</th>
                      <th scope="col">Mié</th>
                      <th scope="col">Jue</th>
                      <th scope="col">Vie</th>
                      <th scope="col">Sáb</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="time" name="in-dom" />
                      </td>
                      <td>
                        <input type="time" name="in-lun" />
                      </td>
                      <td>
                        <input type="time" name="in-mar" />
                      </td>
                      <td>
                        <input type="time" name="in-mie" />
                      </td>
                      <td>
                        <input type="time" name="in-jue" />
                      </td>
                      <td>
                        <input type="time" name="in-vie" />
                      </td>
                      <td>
                        <input type="time" name="in-sab" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="time" name="out-dom" />
                      </td>
                      <td>
                        <input type="time" name="out-lun" />
                      </td>
                      <td>
                        <input type="time" name="out-mar" />
                      </td>
                      <td>
                        <input type="time" name="out-mie" />
                      </td>
                      <td>
                        <input type="time" name="out-jue" />
                      </td>
                      <td>
                        <input type="time" name="out-vie" />
                      </td>
                      <td>
                        <input type="time" name="out-sab" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn btn-primary" type="submit">
                  ACEPTAR
                </button>
                <button className="btn btn-outline-primary" type="reset">
                  RESTABLECER
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Duración de cada turno
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <form onSubmit={submittedDuracion}>
                <label>
                  <span>Minutos:</span>
                  <input type="number" name="duracion" />
                </label>
                <button className="btn btn-primary" type="submit">
                  ACEPTAR
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              Finalizar Operación
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <button className="btn btn-primary" onClick={aceptarSeleccion}>
                ACEPTAR SELECCIÓN
              </button>
              <div className="turnos-provisorios"></div>
            </div>
          </div>
        </div>
      </div>

      <Link to={"/prestaciones"}>
        <button className="btn btn-primary">Volver</button>
      </Link>
    </div>
  );
}
