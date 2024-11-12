import React from "react";
import styles from "./Header.module.css";
import { NavBar } from "./components/NavBar";
import { CompanyLogo } from "./Components/CompanyLogo";



export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <CompanyLogo/>
      <NavBar />
    </div>
  );
};
