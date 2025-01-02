import React, { useEffect, useState } from "react";
import Tasks from "@/components/Tasks/Tasks";
import { Task } from "@/types/task";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { getAllTasks } from "@/api/task";
import { AxiosError } from "axios";

const MainPage = () => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await getAllTasks();

      if (response.data && response.data.tasks) {
        setTasks(response.data.tasks);
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (err: unknown) {
      const error = err as AxiosError;

      if (error.response && error.response.status === 401) {
        router.push("/login");
      } else {
        console.error("Error fetching tasks:", err);
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); //

  return (
    <PageTemplate>
      <Tasks tasks={tasks} />
    </PageTemplate>
  );
};

export default MainPage;
