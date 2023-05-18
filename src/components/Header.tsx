import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useRecoilState} from "recoil"
import {usernameState} from "../atoms"

export function Header() {

  const [username, setUsername]= useRecoilState(usernameState)
  console.log(username)

  return (
    <div
      style={{
        border: "solid 3px pink",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>DANNI TURNER</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>
          Usuario: {username}
          <br />
          Nivel: 3
          <br />
          Cliente: Sin cliente
        </p>
      </div>
    </div>
  );
}
