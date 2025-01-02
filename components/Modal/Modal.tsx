import React from "react";
import styles from "./styles.module.css";
import cross from "../../assets/img/cross.svg";
import Button from "../Button/Button";
type ModalProps = {
  title: string;
  isOpen: boolean;
  onCloseModal: () => void;
  onConfirm: () => void;
};

const Modal = ({ title, isOpen, onCloseModal, onConfirm }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <div className={styles.title}>{title}</div>
              <button className={styles.removeicon} onClick={onCloseModal}>
                <img src={cross.src} alt="close sign" />
              </button>
            </div>

            <div className={styles.buttonsWrapper}>
              <Button
                isLoading={false}
                title={"yes, delete"}
                className={`${styles.btn} ${styles.danger}`}
                onClick={onConfirm}
              />

              <Button
                isLoading={false}
                title={"No close"}
                className={styles.btn}
                onClick={onCloseModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
