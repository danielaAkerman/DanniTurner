import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function Search() {
  const params = useParams();
  // Puede no ser instantáneo
  const [results, setResults] = useState([]);

  async function pullResults(q) {
    // Reduce la responsabilidad del hook useEffect,
    // Puedo hacer async y await
    // const response = await fetch("...");
    // const json = await response.json();
    // setResults(json.results); // Por ejemplo
    console.log("Fetch usando la query", params.busqueda);
  }
  useEffect(() => {
    pullResults(params.busqueda);
  }, [params.busqueda]);

  return (
    <ul>
      {results.map((p) => (
        <li>
          <Link to={"item/" + p.id}>
            <h2>{p.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
