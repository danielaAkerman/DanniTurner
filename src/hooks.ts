// import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { usernameState } from "./atoms";
// Cualquier acceso a la info estará detrás de los (custom) hooks

// const url_provisoria = "http://localhost:3001";

export function useUsername() {
  return useRecoilValue(usernameState);
}
