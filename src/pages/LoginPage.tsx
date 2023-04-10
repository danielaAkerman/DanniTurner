import React, { useState, useEffect } from "react";
import { DTloginForm } from "../components/dt-forms/login-form";

export function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <DTloginForm></DTloginForm>
    </div>
  );
}
