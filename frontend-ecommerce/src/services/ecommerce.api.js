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


