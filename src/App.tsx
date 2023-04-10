import React, { useState, useEffect } from "react";
import { DTbutton } from "./components/dt-buttons";

export function App() {
  // const [valor, setValor] = useState(0);

  // useEffect(() => {
  //   console.log("Valor cambió", valor);
  // }, [valor]);

  // function modificarCount() {
  //   setValor(valor + 1);
  // }

  return <div>
    <h1>Login</h1>
    <DTbutton>ACEPTAR</DTbutton>
  </div>;
}
