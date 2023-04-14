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
