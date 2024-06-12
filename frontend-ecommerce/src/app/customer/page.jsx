"use client";
import { useRouter } from "next/navigation";
import { createCustomer } from "@/services/ecommerce.api";
import { set, useForm } from "react-hook-form";
function NewPage() {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {

    const dataModified = {
      id: 0,
      firstName: data.firstName,
      lastName: data.lastName,
    }
    console.log(dataModified);

    const response = await createCustomer(dataModified);
    //console.log(response);

    if (response) {
      router.push("/");
    }


    
    
  });
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-full"
        onSubmit={onSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Nombre
        </label>
        <input
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Nombre del cliente"
          {...register("firstName", {
            required: {
              value: true,
              message: "El nombre es requerido",
            },
            maxLength: {
              value: 50,
              message: "El nombre no puede tener más de 50 caracteres",
            },
          })}
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        <label htmlFor="title" className="font-bold text-sm">
          Apellido
        </label>
        <input
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Apellido del cliente"
          {...register("lastName", {
            required: {
              value: true,
              message: "El apellido es requerido",
            },
            maxLength: {
              value: 50,
              message: "El apellido no puede tener más de 50 caracteres",
            },
          })}
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white p-2 font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default NewPage;
