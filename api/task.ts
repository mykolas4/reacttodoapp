import cookie from "js-cookie";
import axios from "axios";

const token = cookie.get("jwt_token");

const headers = {
  authorization: token || "",
};

export const getAllTasks = async () => {
  const response = await axios.get(`${process.env.BASE_URL}/tasks`, {
    headers,
  });

  return response;
};

export const getTaskById = async (id: string) => {
  const response = await axios.get(`${process.env.BASE_URL}/tasks/${id}`, {
    headers,
  });

  return response;
};

export const deleteTaskbyid = async (id: string) => {
  const response = await axios.delete(`${process.env.BASE_URL}/tasks/${id}`, {
    headers,
  });

  return response;
};

export const updateTaskStatus = async (id: string, body: object) => {
  const response = await axios.put(
    `${process.env.BASE_URL}/tasks/${id}`,
    body,
    {
      headers,
    }
  );

  return response;
};
