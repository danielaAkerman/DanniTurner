import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header>SOY EL HEADER</header>
      <Outlet />
      <footer>SOY EL footer</footer>
    </div>
  );
}
