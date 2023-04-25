import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";
import { Otro } from "pages/Otro";
import { Search } from "pages/Search";
import { LoginPage } from "pages/LoginPage";
import { DashBoard } from "pages/DashBoard";
import { BuscarCliente } from "pages/clientes/BuscarCliente";
import { NuevoCliente } from "pages/clientes/NuevoCliente";
import { Form } from "Form";
import { DetallesTurno } from "pages/clientes/DetallesTurno";
import { ClienteSeleccionado } from "pages/clientes/ClienteSeleccionado";
import { VerTurnos } from "pages/clientes/VerTurnos";
import { DatosCliente } from "pages/clientes/DatosCliente";
import { Prestaciones } from "pages/prestaciones/Prestaciones";
import { Sucursales } from "pages/prestaciones/Sucursales";
import { Propuestas } from "pages/prestaciones/Propuestas";
import { Prestadores } from "pages/prestaciones/Prestadores";
import { GenerarTurnos } from "pages/prestaciones/GenerarTurnos";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />

        <Route path="/dashboard" element={<DashBoard />} />

        <Route path="/buscar-cliente" element={<BuscarCliente />} />
        <Route path="/cliente/:cliente" element={<ClienteSeleccionado />} />
        <Route path="/nuevo-cliente" element={<NuevoCliente />} />
        <Route path="/detalles-turno" element={<DetallesTurno />} />
        <Route path="/ver-turnos" element={<VerTurnos />} />
        <Route path="/datos-cliente" element={<DatosCliente />} />

        <Route path="/prestaciones" element={<Prestaciones />} />
        <Route path="/prestaciones/sucursales" element={<Sucursales />} />
        <Route path="/prestaciones/propuestas" element={<Propuestas />} />
        <Route path="/prestaciones/prestadores" element={<Prestadores />} />
        <Route path="/prestaciones/generar-turnos" element={<GenerarTurnos />} />


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
