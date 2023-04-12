import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";
import { Otro } from "pages/Otro";
import { Search } from "pages/Search";
import { Clientes } from "pages/clientes/Clientes";
import { Turnos } from "pages/clientes/Turnos";
import { Propuestas } from "pages/clientes/Propuestas";
import { MisTurnos } from "pages/clientes/MisTurnos";
import { SeleccionarProfesional } from "pages/clientes/SeleccionarProfesional";
import { SeleccionarFecha } from "pages/clientes/SeleccionarFecha";
import { SeleccionarTurno } from "pages/clientes/SeleccionarTurno";
import { ConfirmarTurno } from "pages/clientes/ConfirmarTurno";
import { LoginPage } from "pages/LoginPage";
import { DashBoard } from "pages/DashBoard";
import { BuscarCliente } from "pages/clientes/BuscarCliente";
import { NuevoCliente } from "pages/clientes/NuevoCliente";
import { TurnoReservado } from "pages/clientes/TurnoReservado";
import { Form } from "Form";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />

        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/clientes" element={<Clientes />} />
        <Route path="/buscar-cliente" element={<BuscarCliente />} />
        <Route path="/nuevo-cliente" element={<NuevoCliente />} />
        <Route path="/turnos" element={<Turnos />} />
        <Route path="/propuestas" element={<Propuestas />} />
        <Route path="/mis-turnos" element={<MisTurnos />} />
        <Route
          path="/seleccionar-profesional"
          element={<SeleccionarProfesional />}
        />
        <Route path="/seleccionar-fecha" element={<SeleccionarFecha />} />
        <Route path="/seleccionar-turno" element={<SeleccionarTurno />} />
        <Route path="/confirmar-turno" element={<ConfirmarTurno />} />
        <Route path="/turno-reservado" element={<TurnoReservado />} />

        <Route path="/agendas" element={<Otro />} />
        <Route path="/usuarios" element={<Otro />} />
      </Route>
      <Route path="/otro" element={<Otro />} />
      <Route path="/search/:busqueda" element={<Search />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export { AppRoutes };
