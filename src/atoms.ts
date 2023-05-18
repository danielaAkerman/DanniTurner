import { atom } from "recoil";

export const usernameState = atom({
  key: "username",
  default: "Sin usuario",
});
