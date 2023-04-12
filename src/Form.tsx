import React from "react";
import { useForm, Controller } from "react-hook-form";

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    console.log("submitForm", data);
  }

  console.log(watch("nombre"));
  const name = watch("nombre") || "";

  console.log(errors);

  if (name.length < 8) {
    console.log("re corto el nombre");
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label>
        <span>NOMBRE</span>
        <input type="text" {...register("nombre", { required: true })} />
        {errors.nombre && <span>Falta el nombre</span>}
      </label>
      <br />
      <br />
      <label>
        <span>apellido</span>
        <input
          type="text"
          {...register("apellido", { pattern: /^[A-Za-z]+$/i })}
        />
      </label>
      <br />
      <br />

      <Controller
        name="dire"
        control={control}
        rules={{ required: true }}
        render={customCompo}
      />
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
}

function customCompo(props) {
  console.log("las props", props);
  return (
    <div>
      Campo custom
      <label>
        <span>dire</span>
        <input type="text" {...props.field} />
      </label>
      <br />
      <br />
    </div>
  );
}
