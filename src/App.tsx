import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function App() {
  return (
    <div>
      <h1>App</h1>
      <Link to="/page2">Ir a Page2</Link>
      <Link to="/otro">Ir a Otra pag</Link>
    </div>
  );
}
