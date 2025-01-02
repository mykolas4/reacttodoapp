import React, { useEffect, useState } from "react";
import Tasks from "@/components/Tasks/Tasks";
import { Task } from "@/types/task";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { getAllTasks } from "@/api/task";

const MainPage = () => {
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);

  const FetchTasks = async () => {
    try {
      const response = await getAllTasks();

      setTasks(response.data.tasks);

      console.log(response);
    } catch (err) {
      if ((err.status = 401)) {
        router.push("/login");
      }

      console.log(err);
    }
  };

  useEffect(() => {
    FetchTasks();
  }, []);

  return (
    <PageTemplate>
      <Tasks tasks={tasks} />
    </PageTemplate>
  );
};

export default MainPage;
