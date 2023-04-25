import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const sgMail = require("@sendgrid/mail");

export function DetallesTurno() {
  const navigate = useNavigate();

  function turnoConfirmado() {
    // LOGICA RESERVA EN DB

    //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //     const msg = {
    //       to: "",
    //       from: "daniela.akerman@outlook.com",
    //       subject: "",
    //       text: `Hola!`,
    //       html: `<strong>Turno Reservado</strong>
    // Se reservó tu turno....
    //     `,
    //     };
    //     sgMail
    //       .send(msg)
    //       .then(() => {
    //         console.log(`Reporte enviado `);
    //         return { message: "Reporte enviado" };
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         return { message: "Error" };
    //       });

    navigate("/cliente/Akerman", { replace: true });
  }
  function procesoCancelado() {
    navigate("/cliente/Akerman", { replace: true });
  }

  return (
    <div>
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
              <ul>
                <li>Cardiología</li>
                <li>Pediatría</li>
                <li>Obstetricia</li>
                <li>Ginecología</li>
                <li>Laboratorio</li>
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
                <li>Luque, Laura</li>
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
              Seleccionar Fecha y Hora
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Lun 17/04/2023 - 16:30hs</li>
                <li>Mar 18/04/2023 - 19:30hs</li>
                <li>Mié 19/04/2023 - 12:00hs</li>
                <li>Jue 20/04/2023 - 08:30hs</li>
                <li>Vie 21/04/2023 - 16:00hs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />

      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Confirmar Selección
      </button>
      <br />
      <button
        onClick={procesoCancelado}
        type="button"
        className="btn btn-outline-success"
      >
        Deshacer Selección
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Detalles del turno
              </h1>
              {/* <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button> */}
            </div>
            <div className="modal-body">
              <p>Día: 25/05/2023</p>
              <p>Hora: 16:30</p>
              <p>Propuesta: Obstetricia</p>
              <p>Prestador: Cesar Izquierdo</p>
              <p>Paciente: Daniela Akerman 7234682</p>

              {/* <div style={{ border: "solid green 1px" }}>
                <p>Si se tratara de una MODIFICACIÓN:</p>
                <p>
                  Recuerde que, con esta confirmación, el turno ksjdnfsdjf
                  quedará sin efecto
                </p>
              </div> */}
            </div>

            <div className="modal-footer">
              <button
                onClick={turnoConfirmado}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Confirmar
              </button>
              <button
                onClick={procesoCancelado}
                type="button"
                className="btn btn-outline-success"
                data-bs-dismiss="modal"
              >
                Deshacer Selección
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
