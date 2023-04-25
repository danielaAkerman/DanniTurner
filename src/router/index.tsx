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
import { Sucursales } from "pages/prestaciones/sucursales/Sucursales";
import { Propuestas } from "pages/prestaciones/propuestas/Propuestas";
import { Prestadores } from "pages/prestaciones/prestadores/Prestadores";
import { GenerarTurnos } from "pages/prestaciones/generar-turnos/GenerarTurnos";
import { NuevaSucursal } from "pages/prestaciones/sucursales/NuevaSucursal";
import { NuevaPropuesta } from "pages/prestaciones/propuestas/NuevaPropuesta";
import { VerPrestador } from "pages/prestaciones/prestadores/VerPrestador";
import { NuevoPrestador } from "pages/prestaciones/prestadores/NuevoPrestador";
import { DatosPrestador } from "pages/prestaciones/prestadores/DatosPrestador";
import { AgendaPrestador } from "pages/prestaciones/prestadores/AgendaPrestador";

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
        <Route
          path="/prestaciones/sucursales/nueva-sucursal"
          element={<NuevaSucursal />}
        />

        <Route path="/prestaciones/propuestas" element={<Propuestas />} />
        <Route
          path="/prestaciones/propuestas/nueva-propuesta"
          element={<NuevaPropuesta />}
        />

        <Route path="/prestaciones/prestadores" element={<Prestadores />} />
        <Route path="/prestaciones/prestadores/ver-prestador/:prestador" element={<VerPrestador />} />
        <Route path="/prestaciones/prestadores/ver-prestador/datos/:prestador" element={<DatosPrestador />} />
        <Route path="/prestaciones/prestadores/nuevo-prestador" element={<NuevoPrestador />} />
        <Route path="/prestaciones/prestadores/ver-prestador/agenda/:prestador" element={<AgendaPrestador />} />


        <Route
          path="/prestaciones/generar-turnos"
          element={<GenerarTurnos />}
        />

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
