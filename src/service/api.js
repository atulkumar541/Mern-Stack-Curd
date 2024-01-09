import axios from "axios";
const URL = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("While adding data api is not working", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}`);
  } catch (error) {
    console.log("While getting data api is not working", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("While fetching single data api is not working", error);
  }
};

export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("While Editing single data api is not working", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Issue deleting single data api is not working", error);
  }
};
