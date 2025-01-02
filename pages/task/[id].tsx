import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { Task } from "@/types/task";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { deleteTaskbyid, getTaskById, updateTaskStatus } from "@/api/task";
import completedImg from "../../assets/img/completed.svg";
import notCompletedImg from "../../assets/img/not-completed.svg";

const TaskPage = () => {
  const [task, setTask] = useState<Task | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const [isShowDeleteModal, setShowDeleteModal] = useState(false);
  const router = useRouter();

  const body = {
    status: !task?.status,
  };

  const switchTaskStatus = async (id: string) => {
    setLoading(true);

    const response = await updateTaskStatus(id, body);

    setLoading(false);
    setTask(response.data.task);
  };

  const fetchTask = async (id: string) => {
    try {
      const response = await getTaskById(id);

      setTask(response.data.task);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const response = await deleteTaskbyid(id);
      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      fetchTask(id as string);
    }
  }, [router.query.id]);
  return (
    <PageTemplate>
      <section className={styles.content}>
        {task && (
          <>
            <h1>{task.title}</h1>
            <h2 className={styles.points}>{task.points}</h2>
            <div className={styles.StatusWrapper}>
            {task.status ? (
            <img src={completedImg.src} alt="completed mark" />
          ) : (
            <img src={notCompletedImg.src} alt="completed mark" />
          )}
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              isLoading={isLoading}
              title={task.status ? "Mark as incompleted" : "Mark as completed"}
              onClick={() => {
                switchTaskStatus(router.query.id as string);
              }}
            />

            <Button
              isLoading={isLoading}
              title={"Delete task"}
              className={styles.dangerBtn}
              onClick={() => {
                setShowDeleteModal(true);
                // deleteTask(router.query.id as string);
              }}
            />
            </div>
          </>
        )}
      </section>

      <Modal
        title="Do you really want to delete task?"
        isOpen={isShowDeleteModal}
        onCloseModal={() => setShowDeleteModal(false)}
        onConfirm={() => deleteTask(router.query.id as string)}
      />
    </PageTemplate>
  );
};

export default TaskPage;
