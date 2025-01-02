import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./styles.module.css";

type PageTemplateType = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateType) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children} </div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
