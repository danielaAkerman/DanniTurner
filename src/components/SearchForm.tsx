import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const clientName = e.target.cliente.value;
    console.log(clientName);
    navigate("/search/" + clientName, { replace: true });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Cliente:</span>
        <input type="text" name="cliente" />
      </label>
      <button>Buscar</button>
    </form>
  );
}
