import React from "react";
import SearchBar from "./Components/SearchBar";
import styles from "./MainBody.module.css";

export const MainBody = () => {
  return (
    <div>
      <div className={styles.mainBodyContainer}>
        <h3 className={styles.bodyContent}>Ipsum dolor sit amet</h3>
        <SearchBar />
      </div>
    </div>
  );
};
