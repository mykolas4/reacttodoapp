import React from "react";
import styles from "./styles.module.css"

type ButtonType = {
  title: string;
  isLoading: boolean;
  onClick: () => void;
  className?: string
};

const Button = ({ title, isLoading, onClick, className }: ButtonType) => {
  return (
    <button className={`${styles.wrapper} ${className}`} onClick={onClick}>
      {isLoading ? <div className={styles.loader}></div> : <span>{title}</span>}
    </button>
  );
};

export default Button;
