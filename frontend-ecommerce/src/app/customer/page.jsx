"use client";
import { useRouter } from "next/navigation";
import { createCustomer, deleteCustomer, getCustomer, updateCustomer } from "@/services/ecommerce.api";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function NewCustomer({ params }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (params.id) {
      const loadCustomer = async () => {
        try {
          const response = await getCustomer(params.id);
          setValue("firstName", response.firstName);
          setValue("lastName", response.lastName);
        } catch (error) {
          console.error("Error loading customer:", error);
        }
      };
      loadCustomer();
    }
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    const dataModified = {
      id: params.id ? params.id : 0,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    try {
      if (params.id) {
        await updateCustomer(dataModified);
      } else {
        await createCustomer(dataModified);
      }
      router.push("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-full"
        onSubmit={onSubmit}
      >
        <label htmlFor="firstName" className="font-bold text-sm">
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
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
        <label htmlFor="lastName" className="font-bold text-sm">
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
          {params.id ? "Actualizar" : "Crear"}
        </button>

        {params.id && (
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white p-2 font-bold py-2 px-4 rounded ml-4"
              onClick={async () => {
                
                const response = await deleteCustomer(params.id);

                router.push("/");
                router.refresh();
              }}
            >
              Eliminar
            </button>
          )}
      </form>
    </div>
  );
}

export default NewCustomer;
