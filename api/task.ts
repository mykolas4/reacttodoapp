import cookie from "js-cookie";
import axios from "axios";



const token = cookie.get("jwt_token");


const headers = {
  authorization: token || "",
};

export const getAllTasks = async () => {
  const response = await axios.get("http://localhost:3002/tasks", {
    headers,
  });

  return response;
};

export const getTaskById = async (id: string) => {
  const response = await axios.get(`http://localhost:3002/tasks/${id}`, {
    headers,
  });

  return response;
};

export const deleteTaskbyid = async (id: string) => {
  const response = await axios.delete(`http://localhost:3002/tasks/${id}`, {
    headers,
  });

  return response;
};

export const updateTaskStatus = async (id: string, body: object) => {
  const response = await axios.put(`http://localhost:3002/tasks/${id}`, body, {
    headers,
  });

  return response;
};
