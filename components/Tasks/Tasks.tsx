import React from "react";
import { Task } from "@/types/task";
import Card from "../Card/Card";
import styles from "./styles.module.css"


type TasksProps = {
  tasks: Task[];
};

const Tasks = ({ tasks }: TasksProps) => {
  return (
    <div className={styles.wrapper}>
      {tasks.map((task) => {
        return (
          <Card
          id={task.id}
            key={task.id}
            title={task.title}
            status={task.status}
            points={task.points}
          />
        );
      })}
    </div>
  );
};
export default Tasks;
