import React from "react";
import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Page2 } from "./page2";
import { Layout } from "./layout";
import { Otro } from "./Otro";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="page2" element={<Page2 />} />
      </Route>
      <Route path="otro" element={<Otro />} />
    </Routes>
  );
}

export { AppRoutes };
