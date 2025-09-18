import axios from "axios";

const API_URL = "http://localhost:8000";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users, ", error);
    throw error;
  }
};
