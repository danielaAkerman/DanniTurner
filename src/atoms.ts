import { atom, selector } from "recoil";
const url_provisoria = "http://localhost:3001";
const id = 2;

export const userState = atom({
  key: "user",
  default: {
    username: "",
    id: "",
  },
});

export const usernameState = selector({
  key: "username",
  get: async ({ get }) => {
    // const res = await fetch(url_provisoria + "/users/" + id);

    // const data = await res.json();
    // console.log(data);
    // return data.nombre;
    return "Dani hard"
  },
});
