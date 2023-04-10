import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header style={{border:"solid 3px pink"}}>SOY EL HEADER</header>
      <Outlet />
      <footer>SOY EL footer</footer>
    </div>
  );
}
