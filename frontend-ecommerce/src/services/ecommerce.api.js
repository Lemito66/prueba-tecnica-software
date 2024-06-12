import axios from "axios";

/* Link del proyecto */
const URL = "https://localhost:7094/";

export const createCustomer = async (data) => {
  try {
    const response = await axios.post(`${URL}api/Customers`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCustomers = async () => {
  try {
    const response = await axios.get(`${URL}api/Customers`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCustomer = async (id) => {
  try {
    const response = await axios.get(`${URL}api/Customers/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}