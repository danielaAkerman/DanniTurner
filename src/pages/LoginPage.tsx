import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" />
      <Link to={"dashboard"}>
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
