import React from "react";
import { useForm } from "react-hook-form";

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label>
        <span>NOMBRE</span>
        <input type="text" {...register("nombre")} />
      </label>
      <label>
        <span>apellido</span>
        <input type="text" {...register("apellido")} />
      </label>
      <label>
        <span>dire</span>
        <input type="text" {...register("dire")} />
      </label>
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
}
