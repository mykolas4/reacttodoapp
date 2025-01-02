import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import completedImg from "../../assets/img/completed.svg";
import notCompletedImg from "../../assets/img/not-completed.svg";

type CardProps = {
  id: string;
  title: string;
  status: boolean;
  points: number;
};

const Card = ({ id, title, status }: CardProps) => {
  return (
    <Link className={styles.link} href={`/task/${id}`}>
      <div className={styles.card}>
        <>
          {status ? (
            <img src={completedImg.src} alt="completed mark" />
          ) : (
            <img src={notCompletedImg.src} alt="completed mark" />
          )}
        </>
        <span> {title} </span>
      </div>
    </Link>
  );
};

export default Card;
