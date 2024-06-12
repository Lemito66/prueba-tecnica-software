import axios from "axios";

/* Link del proyecto */
const BASE_URL = "https://localhost:7094/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createCustomer = async (data) => {
  try {
    const response = await axiosInstance.post("api/Customers", data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getCustomers = async () => {
  try {
    const response = await axiosInstance.get("api/Customers");
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const getCustomer = async (id) => {
  try {
    const response = await axiosInstance.get(`api/Customers/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const updateCustomer = async (data) => {
  try {
    const response = await axiosInstance.put(`api/Customers/${data.id}`, data);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await axiosInstance.delete(`api/Customers/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

const handleAxiosError = (error) => {
  if (error.response) {
    // La solicitud fue hecha y el servidor respondió con un código de estado
    // que está fuera del rango de 2xx
    console.error("Error response data:", error.response.data);
    console.error("Error response status:", error.response.status);
    console.error("Error response headers:", error.response.headers);
  } else if (error.request) {
    // La solicitud fue hecha pero no se recibió respuesta
    console.error("Error request:", error.request);
  } else {
    // Algo pasó al configurar la solicitud que desencadenó un error
    console.error("Error message:", error.message);
  }
  console.error("Error config:", error.config);
  // Propagar el error para que el componente llamador pueda manejarlo
  throw error;
};
