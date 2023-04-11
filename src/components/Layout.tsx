import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div>
      {/* <header style={{border:"solid 3px pink"}}>HEADER</header> */}
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
